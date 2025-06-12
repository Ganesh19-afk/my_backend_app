import { Request, Response } from "express";
import prisma from '../Db/prisma';
import fs from "fs";
import path from "path";

export const createVariant = async (req: Request, res: Response) => {
  try {
    const { description, specification, Price, stock, productId } = req.body;
    const files = req.files as Express.Multer.File[];

    if (!files?.length) {
       res.status(400).json({ message: "Images are required." });
       return
    }

    const variant = await prisma.variant.create({
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
  } catch (error) {
    res.status(500).json({ message: "Error creating variant", error: error instanceof Error ? error.message : error });
  }
};

export const getVariant = async(req: Request, res: Response) =>{

    const variantId= req.params.id;
    if(!variantId){res.status(401).json({message:"varient id required"})}
    
    const variant = await prisma.variant.findUnique({
      where: { id: +variantId },
      include: {
        images: true,
      },
    });
    if(!variant){res.status(401).json("variant not found")}

    res.status(200).json(variant)
}


export const updateVariant = async (req: Request, res: Response) => {
  try {
    const variantId = Number(req.params.id);
    if (isNaN(variantId)) {
       res.status(400).json({ message: "Invalid variant ID" });
       return
    }

    const { description, specification, Price, stock } = req.body;
    const files = req.files as Express.Multer.File[] | undefined;

    const data: any = {};
    if (description !== undefined) data.description = description;
    if (specification !== undefined) data.specification = JSON.parse(specification);
    if (Price !== undefined) data.Price = parseFloat(Price);
    if (stock !== undefined) data.stock = parseInt(stock);

    if (files && files.length > 0) {
      // First delete existing images of this variant
      await prisma.variantimage.deleteMany({
        where: { variantId },
      });

      // Then create new images
      data.images = {
        create: files.map(file => ({ url: file.path })),
      };
    }

    const updatedVariant = await prisma.variant.update({
      where: { id: variantId },
      data,
      include: { images: true },
    });

    res.json({ message: "Variant updated with images replaced", variant: updatedVariant });
  } catch (error) {
    res.status(500).json({ message: "Error updating variant", error: error instanceof Error ? error.message : error });
  }
};



export const deleteVariant = async (req: Request, res: Response) => {
  try {
    const variantId = Number(req.params.id);
    if (isNaN(variantId)) {
       res.status(400).json({ message: "Invalid variant ID" });
       return
    }

    const existingImages = await prisma.variantimage.findMany({
      where: { variantId },
    });

    // Delete variant and its related images in one query
    await prisma.variant.delete({
      where: { id: variantId },
      include: { images: true },
    });

    // Optionally remove image files from disk
    existingImages.forEach(image => {
      const filePath = path.join("uploads", path.basename(image.url));
      if (fs.existsSync(filePath)) {
        fs.unlink(filePath, err => {
          if (err) console.error("File deletion error:", err);
        });
      }
    });

    res.json({ message: "Variant and its images deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting variant",
      error: error instanceof Error ? error.message : error,
    });
  }
};


















