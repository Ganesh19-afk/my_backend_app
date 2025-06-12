"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCartItem = exports.getCart = exports.addToCart = void 0;
const prisma_1 = __importDefault(require("../Db/prisma"));
const addToCart = async (req, res) => {
    try {
        const userId = Number(req.user?.userId);
        const { productId, variantId, quantity } = req.body;
        if ((!productId && !variantId) || (productId && variantId)) {
            res.status(400).json({ message: "Provide either productId or variantId, not both." });
            return;
        }
        const cart = await prisma_1.default.cart.upsert({
            where: { userId },
            create: { userId },
            update: {},
        });
        const existingItem = await prisma_1.default.cartItem.findFirst({
            where: {
                cartId: cart.id,
                productId: productId || undefined,
                variantId: variantId || undefined,
            },
        });
        if (existingItem) {
            const updated = await prisma_1.default.cartItem.update({
                where: { id: existingItem.id },
                data: { quantity: existingItem.quantity + (quantity ?? 1) },
            });
            res.json(updated);
            return;
        }
        const newItem = await prisma_1.default.cartItem.create({
            data: {
                cartId: cart.id,
                productId,
                variantId,
                quantity: quantity ?? 1,
            },
        });
        res.status(201).json(newItem);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
};
exports.addToCart = addToCart;
const getCart = async (req, res) => {
    const userId = Number(req.user?.userId);
    try {
        const cart = await prisma_1.default.cart.findUnique({
            where: { userId },
            include: {
                items: {
                    include: {
                        product: true,
                        variant: {
                            include: {
                                images: true,
                            },
                        },
                    },
                },
            },
        });
        res.status(200).json(cart);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
};
exports.getCart = getCart;
const deleteCartItem = async (req, res) => {
    try {
        const userId = req.user?.userId;
        if (!userId) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }
        const itemId = req.params.id;
        console.log(itemId);
        if (!itemId) {
            res.status(401).json({ message: 'productId not found' });
            return;
        }
        const item = await prisma_1.default.cartItem.findUnique({
            where: { id: Number(itemId) },
            include: { cart: true },
        });
        if (!item || item.cart.userId !== userId) {
            res.status(404).json({ message: 'Item not found' });
            return;
        }
        await prisma_1.default.cartItem.delete({ where: { id: item.id } });
        res.json({ message: 'Item removed from cart' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong while removing item from cart.' });
    }
};
exports.deleteCartItem = deleteCartItem;
