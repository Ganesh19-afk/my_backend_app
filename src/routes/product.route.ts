import express from 'express';
import { createProduct, deleteProduct, filterProducts, getAllCategories, getProduct, getProductsByCategory, getSingleProduct, updateProduct } from '../controllers/product.controller';
import { upload } from '../../middlewares/upload.middleware';  
import { authenticate, authorizeAdmin } from '../scripts/jwt';
import variantRoutes from '../routes/variant.route'

const router = express.Router();


router.get('/', getProduct);
router.get('/filter',filterProducts)
router.get('/category',getProductsByCategory)
router.get('/categories',getAllCategories)
router.get('/product_info/:slug',getSingleProduct)
router.use('/variant',variantRoutes)
router.use(authenticate)
router.use(authorizeAdmin)
router.post('/addproduct',upload.single("image"), createProduct);
router.delete('/delete/:id',deleteProduct);
router.patch('/update/:id',upload.single("image"),updateProduct)


export default router;
