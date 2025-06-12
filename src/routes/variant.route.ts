import express from 'express'
import { createVariant, deleteVariant, getVariant, updateVariant } from '../controllers/variant.controller'
import { upload } from '../../middlewares/upload.middleware';
import { authenticate, authorizeAdmin } from '../scripts/jwt';

const router= express.Router()
router.get('/',getVariant);

router.use(authenticate,authorizeAdmin)
router.post('/addvariant',upload.array('image'),createVariant);
router.patch('/update/:id',upload.array('image'),updateVariant)
router.post('/delete/:id',deleteVariant);

export default router ; 