"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVariant = exports.updateVariant = exports.getVariant = exports.createVariant = void 0;
const prisma_1 = __importDefault(require("../Db/prisma"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const createVariant = async (req, res) => {
    try {
        const { description, specification, Price, stock, productId } = req.body;
        const files = req.files;
        if (!files?.length) {
            res.status(400).json({ message: "Images are required." });
            return;
        }
        const variant = await prisma_1.default.variant.create({
            data: {
                description,
                specification: JSON.parse(specification),
                Price: parseFloat(Price),
                stock: parseInt(stock),
                product: { connect: { id: Number(productId) } },
                images: {
                    create: files.map(file => ({ url: file.path })),
                },
            },
            include: { images: true },
        });
        res.status(201).json({ message: "Variant created", variant });
    }
    catch (error) {
        res.status(500).json({ message: "Error creating variant", error: error instanceof Error ? error.message : error });
    }
};
exports.createVariant = createVariant;
const getVariant = async (req, res) => {
    const variantId = req.params.id;
    if (!variantId) {
        res.status(401).json({ message: "varient id required" });
    }
    const variant = await prisma_1.default.variant.findUnique({
        where: { id: +variantId },
        include: {
            images: true,
        },
    });
    if (!variant) {
        res.status(401).json("variant not found");
    }
    res.status(200).json(variant);
};
exports.getVariant = getVariant;
const updateVariant = async (req, res) => {
    try {
        const variantId = Number(req.params.id);
        if (isNaN(variantId)) {
            res.status(400).json({ message: "Invalid variant ID" });
            return;
        }
        const { description, specification, Price, stock } = req.body;
        const files = req.files;
        const data = {};
        if (description !== undefined)
            data.description = description;
        if (specification !== undefined)
            data.specification = JSON.parse(specification);
        if (Price !== undefined)
            data.Price = parseFloat(Price);
        if (stock !== undefined)
            data.stock = parseInt(stock);
        if (files && files.length > 0) {
            // First delete existing images of this variant
            await prisma_1.default.variantimage.deleteMany({
                where: { variantId },
            });
            // Then create new images
            data.images = {
                create: files.map(file => ({ url: file.path })),
            };
        }
        const updatedVariant = await prisma_1.default.variant.update({
            where: { id: variantId },
            data,
            include: { images: true },
        });
        res.json({ message: "Variant updated with images replaced", variant: updatedVariant });
    }
    catch (error) {
        res.status(500).json({ message: "Error updating variant", error: error instanceof Error ? error.message : error });
    }
};
exports.updateVariant = updateVariant;
const deleteVariant = async (req, res) => {
    try {
        const variantId = Number(req.params.id);
        if (isNaN(variantId)) {
            res.status(400).json({ message: "Invalid variant ID" });
            return;
        }
        const existingImages = await prisma_1.default.variantimage.findMany({
            where: { variantId },
        });
        // Delete variant and its related images in one query
        await prisma_1.default.variant.delete({
            where: { id: variantId },
            include: { images: true },
        });
        // Optionally remove image files from disk
        existingImages.forEach(image => {
            const filePath = path_1.default.join("uploads", path_1.default.basename(image.url));
            if (fs_1.default.existsSync(filePath)) {
                fs_1.default.unlink(filePath, err => {
                    if (err)
                        console.error("File deletion error:", err);
                });
            }
        });
        res.json({ message: "Variant and its images deleted successfully" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting variant",
            error: error instanceof Error ? error.message : error,
        });
    }
};
exports.deleteVariant = deleteVariant;
