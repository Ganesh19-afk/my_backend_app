import express from 'express';
import { getOrders, getSingleOrder, placeOrder } from '../controllers/order.controller';
import { authenticate } from '../scripts/jwt';
import { guestOrder } from '../controllers/guestOrder.controller';


const router = express.Router();
router.post('/guest-order',guestOrder)
router.use(authenticate)
router.get('/get-orders',getOrders);
router.post('/place-order',placeOrder);
router.get('/orderid/:orderId',getSingleOrder)

export default router 