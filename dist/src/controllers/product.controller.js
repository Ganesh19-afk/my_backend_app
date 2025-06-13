"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleProduct = exports.updateProduct = exports.deleteProduct = exports.getAllCategories = exports.getProductsByCategory = exports.getProduct = exports.createProduct = void 0;
const prisma_1 = __importDefault(require("../Db/prisma"));
const generateSlug = (name) => {
    return name.trim().toLowerCase().replace(/\s+/g, '-');
};
const createProduct = async (req, res) => {
    try {
        const { name, price, stock, is_new_arrival, is_active, tag, categoryNames, description, } = req.body;
        const userId = req.user?.userId;
        if (!name || !price || !userId) {
            res.status(400).json({ error: "Name, price, and user are required." });
            return;
        }
        const image = req.file?.path || null;
        if (!categoryNames || typeof categoryNames !== "string") {
            res.status(400).json({ error: "categoryNames must be a comma-separated string" });
            return;
        }
        const categoryList = categoryNames.split(",").map((c) => c.trim());
        if (categoryList.length === 0) {
            res.status(400).json({ error: "At least one category name is required" });
            return;
        }
        const connectedCategories = await Promise.all(categoryList.map(async (catName) => {
            let category = await prisma_1.default.category.findUnique({ where: { name: catName } });
            if (!category) {
                category = await prisma_1.default.category.create({ data: { name: catName } });
            }
            return { id: category.id };
        }));
        const baseSlug = generateSlug(name);
        let slug = baseSlug;
        let suffix = 1;
        while (await prisma_1.default.product.findUnique({ where: { slug } })) {
            slug = `${baseSlug}-${suffix++}`;
        }
        const product = await prisma_1.default.product.create({
            data: {
                name,
                price: parseFloat(price),
                stock: stock ? parseInt(stock) : undefined,
                is_new_arrival: is_new_arrival === "true",
                is_active: is_active === "true",
                tag: Array.isArray(tag) ? tag : [],
                image,
                description,
                slug,
                user: { connect: { id: userId } },
                categories: {
                    connect: connectedCategories,
                },
            },
            include: {
                categories: true,
                variants: {
                    include: {
                        images: true,
                    },
                },
            },
        });
        res.status(201).json(product);
    }
    catch (e) {
        console.error(e);
        if (e.code === "P2002" && e.meta?.target?.includes("slug")) {
            res.status(409).json({ error: "A product with this slug already exists." });
        }
        else {
            res.status(500).json({ error: "Failed to add product" });
        }
    }
};
exports.createProduct = createProduct;
const getProduct = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 10;
        const skip = (page - 1) * limit;
        const [products, totalCount] = await Promise.all([
            prisma_1.default.product.findMany({
                skip,
                take: limit,
                include: { categories: true, variants: {
                        include: {
                            images: true
                        }
                    } },
            }),
            prisma_1.default.product.count(),
        ]);
        res.status(200).json({
            page,
            totalPages: Math.ceil(totalCount / limit),
            totalItems: totalCount,
            items: products,
        });
    }
    catch (e) {
        console.error(e);
        res.status(400).json({ error: "Failed to fetch products" });
    }
};
exports.getProduct = getProduct;
const getProductsByCategory = async (req, res) => {
    const categoryName = req.query.category;
    if (!categoryName) {
        res.status(400).json({ error: "Missing category query parameter" });
        return;
    }
    try {
        // Step 1: Find the category by name
        const category = await prisma_1.default.category.findUnique({
            where: { name: categoryName },
        });
        if (!category) {
            res.status(404).json({ error: "Category not found" });
            return;
        }
        const products = await prisma_1.default.product.findMany({
            where: {
                categories: {
                    some: {
                        id: category.id,
                    },
                }
            },
            include: {
                categories: true,
                variants: true
            },
        });
        res.status(200).json(products);
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ error: "Failed to fetch products by category" });
    }
};
exports.getProductsByCategory = getProductsByCategory;
const getAllCategories = async (req, res) => {
    try {
        const categories = await prisma_1.default.category.findMany();
        res.status(200).json(categories);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
};
exports.getAllCategories = getAllCategories;
const deleteProduct = async (req, res) => {
    const id = req.params.id;
    // console.log(id)
    if (!id) {
        res.status(401).json({ error: "product id required" });
        return;
    }
    try {
        const deleteprod = await prisma_1.default.product.delete({ where: { id: +id } });
        res.status(200).json({ message: 'product deleted successfully', deleteprod });
    }
    catch (e) {
        res.status(500).json({ e });
    }
};
exports.deleteProduct = deleteProduct;
const updateProduct = async (req, res) => {
    const id = req.params.id;
    //  console.log(req.body)
    if (!id) {
        res.status(400).json({ error: 'Product ID is required' });
        return;
    }
    const { name, price, categoryName, description, stock } = req.body;
    const baseSlug = generateSlug(name);
    let slug = baseSlug;
    let suffix = 1;
    while (await prisma_1.default.product.findUnique({ where: { slug } })) {
        slug = `${baseSlug}-${suffix++}`;
    }
    try {
        const updateData = {
            name,
            price: price ? Number(price) : undefined,
            stock: stock ? Number(stock) : undefined,
            description,
            slug
            // has_variant,
            // tag: tags,
        };
        if (req.file) {
            updateData.image = req.file?.path || null;
            ; // or use req.file.path based on your setup
        }
        if (categoryName) {
            const categoriesArray = categoryName
                .split(',')
                .map((c) => c.trim())
                .filter(Boolean);
            const connectedCategories = await Promise.all(categoriesArray.map(async (name) => {
                let category = await prisma_1.default.category.findUnique({ where: { name } });
                if (!category) {
                    category = await prisma_1.default.category.create({ data: { name } });
                }
                return { id: category.id };
            }));
            updateData.categories = { set: connectedCategories };
        }
        const updatedProduct = await prisma_1.default.product.update({
            where: { id: Number(id) },
            data: updateData,
            include: { categories: true,
                variants: {
                    include: {
                        images: true
                    }
                } },
        });
        res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Failed to update product' });
    }
};
exports.updateProduct = updateProduct;
const getSingleProduct = async (req, res) => {
    const { slug } = req.params;
    if (!slug) {
        res.status(401).json({ error: "Product ID required" });
        return;
    }
    try {
        const product = await prisma_1.default.product.findUnique({
            where: { slug: String(slug) },
            include: {
                categories: true,
                variants: {
                    include: {
                        images: true,
                    },
                },
            },
        });
        if (!product) {
            res.status(401).json({ error: "Product not found" });
            return;
        }
        res.status(200).json(product);
        return;
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ error: "Server error", details: e });
        return;
    }
};
exports.getSingleProduct = getSingleProduct;
