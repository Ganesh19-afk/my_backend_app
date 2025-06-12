"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestOrder = void 0;
const prismaClient_1 = __importDefault(require("../../prisma/prismaClient"));
const guestOrder = async (req, res) => {
    try {
        const { subTotal, tax, discount, deliveryCharge, finalTotal, billingAddress, deliveryAddress, products, paymentType, transactionId, paymentDatetime, paymentStatus, } = req.body;
        if (!Array.isArray(products) || products.length === 0) {
            res.status(400).json({ message: 'Products list is required' });
            return;
        }
        const orderItems = products.map((item) => ({
            productId: item.productId,
            variantId: item.variantId || null,
            unitPrice: item.unitPrice,
            quantity: item.quantity,
        }));
        const order = await prismaClient_1.default.order.create({
            data: {
                subTotal,
                tax,
                discount,
                deliveryCharge,
                finalTotal,
                billingAddress,
                deliveryAddress,
                is_payment_done: paymentStatus === 'SUCCESS',
                orderItems: { create: orderItems },
                payment: paymentType
                    ? {
                        create: {
                            paymentType,
                            transactionId,
                            status: paymentStatus || 'PENDING',
                            paymentDatetime: paymentDatetime ? new Date(paymentDatetime) : undefined,
                        },
                    }
                    : undefined,
            },
            include: {
                orderItems: true,
                payment: true,
            },
        });
        res.status(201).json({
            messsage: "order placed successfully",
            order
        });
    }
    catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.guestOrder = guestOrder;
