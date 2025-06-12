"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddress = exports.updateAddress = exports.getAddress = exports.createAddress = void 0;
// import prisma from '../../prisma/prismaClient'
const addressTypes_1 = require("../Types/addressTypes");
const zod_1 = require("zod");
const prisma_1 = __importDefault(require("../Db/prisma"));
// import prisma from '../../prisma/prismaClient';
const createAddress = async (req, res) => {
    try {
        // Extract userId from authenticated request (req.user)
        const userId = req.user?.userId;
        if (!userId) {
            res.status(401).json({ message: 'Unauthorized: user not found' });
            return;
        }
        // Validate the rest of the body without userId (omit userId in schema)
        // Let's create a new schema without userId, since it's derived from token
        const addressData = addressTypes_1.createAddressSchema.omit({ userId: true }).parse(req.body);
        // Combine userId from token with validated address fields
        const dataToCreate = {
            userId,
            ...addressData,
        };
        const address = await prisma_1.default.address.create({
            data: dataToCreate,
        });
        res.status(201).json(address);
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            res.status(400).json({ message: 'Validation failed', errors: error.errors });
            return;
        }
        console.error('Error creating address:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.createAddress = createAddress;
const getAddress = async (req, res) => {
    const userId = req.user?.userId;
    if (!userId) {
        res.status(401).json({ message: 'Unauthorized: user not found' });
        return;
    }
    try {
        const addresses = await prisma_1.default.address.findMany({
            where: { userId }
        });
        res.status(200).json(addresses);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
};
exports.getAddress = getAddress;
const updateAddress = async (req, res) => {
    const userId = req.user?.userId;
    if (!userId) {
        res.status(401).json({ message: 'Unauthorized: user not found' });
        return;
    }
    try {
        const addressId = Number(req.params.id);
        if (isNaN(addressId)) {
            res.status(400).json({ message: 'Invalid address ID' });
            return;
        }
        const updateData = addressTypes_1.updateAddressSchema.parse(req.body);
        const existingAddress = await prisma_1.default.address.findUnique({
            where: { id: addressId },
        });
        if (!existingAddress || existingAddress.userId !== userId) {
            res.status(404).json({ message: 'Address not found or access denied' });
            return;
        }
        const updatedAddress = await prisma_1.default.address.update({
            where: { id: addressId },
            data: updateData,
        });
        res.status(200).json(updatedAddress);
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            res.status(400).json({ message: 'Validation failed', errors: error.errors });
            return;
        }
        res.status(500).json({ error });
    }
};
exports.updateAddress = updateAddress;
const deleteAddress = async (req, res) => {
    const userId = req.user?.userId;
    if (!userId) {
        res.status(401).json({ message: 'Unauthorized: user not found' });
        return;
    }
    try {
        const addressId = Number(req.params.id);
        if (isNaN(addressId)) {
            res.status(400).json({ message: 'Invalid address ID' });
            return;
        }
        const existingAddress = await prisma_1.default.address.findUnique({
            where: { id: addressId },
        });
        if (!existingAddress || existingAddress.userId !== userId) {
            res.status(404).json({ message: 'Address not found or access denied' });
            return;
        }
        // Delete the address
        await prisma_1.default.address.delete({
            where: { id: addressId },
        });
        res.status(200).json({ message: 'Address deleted successfully' });
    }
    catch (e) {
        res.status(500).json({ e });
    }
};
exports.deleteAddress = deleteAddress;
