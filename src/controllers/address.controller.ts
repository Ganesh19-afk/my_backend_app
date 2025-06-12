import express, { Request, Response } from 'express'
// import prisma from '../../prisma/prismaClient'
import { createAddressSchema, updateAddressSchema } from '../Types/addressTypes';
import { ZodError } from 'zod';
import { CustomRequest } from "../scripts/jwt";
import { Prisma } from '@prisma/client';
import prisma from '../Db/prisma';
// import prisma from '../../prisma/prismaClient';




export const createAddress = async (req: CustomRequest, res: Response) => {
    try {
        // Extract userId from authenticated request (req.user)
        const userId = req.user?.userId;

        if (!userId) {
             res.status(401).json({ message: 'Unauthorized: user not found' });
             return
        }

        // Validate the rest of the body without userId (omit userId in schema)
        // Let's create a new schema without userId, since it's derived from token
        const addressData = createAddressSchema.omit({ userId: true }).parse(req.body);

        // Combine userId from token with validated address fields
        const dataToCreate = {
            userId,
            ...addressData,
        };

        const address = await prisma.address.create({
            data: dataToCreate,
        });

        res.status(201).json(address);
    } catch (error) {
        if (error instanceof ZodError) {
             res.status(400).json({ message: 'Validation failed', errors: error.errors });
             return
        }

        console.error('Error creating address:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getAddress = async (req: CustomRequest, res: Response) => {

    const userId = req.user?.userId;
    if (!userId) {
         res.status(401).json({ message: 'Unauthorized: user not found' });
         return
    }

    try {
        const addresses = await prisma.address.findMany({
            where: { userId }
        });
        res.status(200).json(addresses)
    } catch (e) {
        res.status(500).json({ error: e })
    }
}

export const updateAddress = async (req: CustomRequest, res: Response) => {
    const userId = req.user?.userId;
    if (!userId) {
         res.status(401).json({ message: 'Unauthorized: user not found' });
         return
    }

    try {
        const addressId = Number(req.params.id);
        if (isNaN(addressId)) {
             res.status(400).json({ message: 'Invalid address ID' });
             return
        }

        const updateData = updateAddressSchema.parse(req.body);
       const existingAddress = await prisma.address.findUnique({
      where: { id: addressId },
    });

    if (!existingAddress || existingAddress.userId !== userId) {
       res.status(404).json({ message: 'Address not found or access denied' });
       return
    }
    const updatedAddress = await prisma.address.update({
      where: { id: addressId },
      data: updateData,
    });

    res.status(200).json(updatedAddress);

    } catch (error) {
        if (error instanceof ZodError) {
       res.status(400).json({ message: 'Validation failed', errors: error.errors });
       return
    }
        res.status(500).json({ error })
    }
}

export const deleteAddress = async (req: CustomRequest, res: Response) => {
     const userId = req.user?.userId;
    if (!userId) {
        
        res.status(401).json({ message: 'Unauthorized: user not found' });
        return
    }
    try{
        const addressId = Number(req.params.id);
        if (isNaN(addressId)) {
             res.status(400).json({ message: 'Invalid address ID' });
             return
        }
         const existingAddress = await prisma.address.findUnique({
      where: { id: addressId },
    });

    if (!existingAddress || existingAddress.userId !== userId) {
       res.status(404).json({ message: 'Address not found or access denied' });
       return
    }

    // Delete the address
    await prisma.address.delete({
      where: { id: addressId },
    });

    res.status(200).json({ message: 'Address deleted successfully' });
    }
    catch(e){
        res.status(500).json({ e })
    }
}

