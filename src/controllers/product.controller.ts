import { Request, Response } from "express";
import prisma from "../../prisma/prismaClient";
import { CustomRequest } from "../scripts/jwt";

const generateSlug = (name: string): string => {
  return name.trim().toLowerCase().replace(/\s+/g, '-');
};

export const createProduct = async (req: CustomRequest, res: Response): Promise<void> => {
  try {
    const {
      name,
      price,
      stock,
      is_new_arrival,
      is_active,
      tag,
      categoryNames,
      description,
    } = req.body;

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

    const categoryList = categoryNames.split(",").map((c: string) => c.trim());

    if (categoryList.length === 0) {
      res.status(400).json({ error: "At least one category name is required" });
      return;
    }

    const connectedCategories = await Promise.all(
      categoryList.map(async (catName: string) => {
        let category = await prisma.category.findUnique({ where: { name: catName } });
        if (!category) {
          category = await prisma.category.create({ data: { name: catName } });
        }
        return { id: category.id };
      })
    );

    const baseSlug = generateSlug(name);
    let slug = baseSlug;
    let suffix = 1;
    while (await prisma.product.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${suffix++}`;
    }

    const product = await prisma.product.create({
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
  } catch (e: any) {
    console.error(e);
    if (e.code === "P2002" && e.meta?.target?.includes("slug")) {
      res.status(409).json({ error: "A product with this slug already exists." });
    } else {
      res.status(500).json({ error: "Failed to add product" });
    }
  }
};


export const getProduct = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const [products, totalCount] = await Promise.all([
      prisma.product.findMany({
        skip,
        take: limit,
        include: { categories: true , variants:{
          include:{
            images:true
          }
        }},
      }),
      prisma.product.count(),
    ]);

    res.status(200).json({
      page,
      totalPages: Math.ceil(totalCount / limit),
      totalItems: totalCount,
      items: products,
    }); 
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: "Failed to fetch products" });
  }
};

export const getProductsByCategory = async (req: Request, res: Response) => {
  const categoryName = req.query.category as string;

  if (!categoryName) {
    res.status(400).json({ error: "Missing category query parameter" });
     return
  }

  try {
    // Step 1: Find the category by name
    const category = await prisma.category.findUnique({
      where: { name: categoryName },
    });

    if (!category) {
      res.status(404).json({ error: "Category not found" });
       return
    }

    const products = await prisma.product.findMany({
      where: {
        categories:{
          some :{
            id: category.id,
          },
        }
        
      },
      include: {
        categories: true, 
        variants:true
      },
    });

    res.status(200).json(products);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to fetch products by category" });
  }
};

export const getAllCategories = async (req:Request,res:Response) => {
 try{
  const categories = await prisma.category.findMany();
  res.status(200).json(categories)
 } catch(e){
  res.status(500).json({error:e})
 }

}

export const deleteProduct = async (req:Request,res:Response) =>{
    const id = req.params.id;

  // console.log(id)

  if(!id){
    res.status(401).json({error:"product id required"})
    return
  }

  try{
    const deleteprod= await prisma.product.delete({where:{id:+id}});
    res.status(200).json({message:'product deleted successfully',deleteprod})
  } catch(e){
   res.status(500).json({e})
  }
}



export const updateProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  //  console.log(req.body)

  if (!id) {
    res.status(400).json({ error: 'Product ID is required' });
    return;
  }

  const { name, price,  categoryName ,description,stock} = req.body;
  const baseSlug = generateSlug(name);
    let slug = baseSlug;
    let suffix = 1;
    while (await prisma.product.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${suffix++}`;
    }

  try {
    const updateData: any = {
      name,
      price: price ? Number(price) : undefined,
      stock: stock ? Number(stock) : undefined,
      description,
      slug
      // has_variant,
      // tag: tags,
    };
    if (req.file) {
      updateData.image =`/upload/${req.file.filename}`; // or use req.file.path based on your setup
    }

    if (categoryName) {
      const categoriesArray = categoryName
        .split(',')
        .map((c: string) => c.trim())
        .filter(Boolean);

      const connectedCategories = await Promise.all(
        categoriesArray.map(async (name:string) => {
          let category = await prisma.category.findUnique({ where: { name } });
          if (!category) {
            category = await prisma.category.create({ data: { name } });
          }
          return { id: category.id };
        })
      );

      updateData.categories = { set: connectedCategories };
    }

    const updatedProduct = await prisma.product.update({
      where: { id: Number(id) },
      data: updateData,
      include: { categories: true , 
        variants:{ 
          include:{ 
            images:true
         }
      }},
    });

    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to update product' });
  }
};

export const getSingleProduct = async (req: Request, res: Response):Promise<void> => {
  const { slug } = req.params;

  if (!slug) {
    res.status(401).json({ error: "Product ID required" });
    return;
  }

  try {
   const product = await prisma.product.findUnique({
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

     res.status(200).json( product );
     return

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error", details: e });
    return;
  }
};


