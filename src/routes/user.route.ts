import express from "express"
import { createUser, getUser } from "../controllers/user.controller";
import productRoutes from './product.route'
import { authenticate, authorizeAdmin } from "../scripts/jwt";
import { addToCart, deleteCartItem, getCart } from "../controllers/cart.controller";
import addressroutes from '../routes/address.route'

const router= express.Router();
router.post('/',createUser);
router.get('/',getUser);
router.use('/address',addressroutes)
router.use(authenticate)
router.post('/cart/add-update',addToCart);
router.get('/cart',getCart)
router.delete('/cart/delete-item/:id',deleteCartItem)
export default router; 