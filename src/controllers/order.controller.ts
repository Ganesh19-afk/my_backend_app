import { Request, Response } from 'express';
import prisma from '../Db/prisma';
import { CustomRequest } from '../scripts/jwt';

// place order 
export const placeOrder = async (req: CustomRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
         res.status(403).json({ message: 'Unauthorized' });
         return
    }

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
        userId,
        subTotal,
        tax,
        discount,
        deliveryCharge,
        finalTotal,
        billingAddress,
        deliveryAddress,
        is_payment_done: paymentStatus === 'PENDING',
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

    res.status(201).json(order);
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getOrders = async (req: CustomRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
       res.status(401).json({ message: 'Unauthorized: user not found' });
       return
    }

    const orders = await prisma.order.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        orderItems: {
          include: {
            product: {
              select: { id: true, name: true, image: true },
            },
            variant: {
              select: {
                id: true,
                description: true,
                specification: true,
              },
            },
          },
        },
        payment: true,
      },
    });

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const getSingleOrder = async (req: CustomRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    const orderId = parseInt(req.params.orderId);

    if (!userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    if (isNaN(orderId)) {
      res.status(400).json({ message: 'Invalid order ID' });
      return;
    }

    const order = await prisma.order.findFirst({
      where: {
        id: orderId,
        userId: userId,
      },
      include: {
        orderItems: {
          include: {
            product: {
              select: { id: true, name: true, image: true },
            },
            variant: {
              select: {
                id: true,
                description: true,
                specification: true,
              },
            },
          },
        },
        payment: true,
      },
    });

    if (!order) {
      res.status(404).json({ message: 'Order not found' });
      return;
    }

    res.status(200).json({
      ...order,
      invoiceUrl: `https://my-backend-app-q84h.onrender.com/api/order/invoice/${order.id}`,
    });
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
