import { Request, Response } from "express";
import prisma from "../../prisma/prismaClient";

export const guestOrder = async (req:Request,res:Response) =>{

    try{
     const {
      subTotal,
      tax,
      discount,
      deliveryCharge,
      finalTotal,
      billingAddress,
      deliveryAddress,
      products,
      paymentType,
      transactionId,
      paymentDatetime,
      paymentStatus,
    } = req.body;

    if (!Array.isArray(products) || products.length === 0) {
       res.status(400).json({ message: 'Products list is required' });
       return
    }
    
    const orderItems = products.map((item: any) => ({
      productId: item.productId,
      variantId: item.variantId || null,
      unitPrice: item.unitPrice,
      quantity: item.quantity,
    }));

    const order = await prisma.order.create({
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
        messsage:"order placed successfully",
        order});
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

