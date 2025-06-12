import express from 'express';
import { createVariant, getVariant } from '../controllers/variant.controller';
import { authenticate } from '../scripts/jwt';
import { createAddress, deleteAddress, getAddress, updateAddress } from '../controllers/address.controller';


const router= express.Router()

router.use(authenticate)
router.get('/get',getAddress);
router.post('/create',createAddress)
router.post('/update',updateAddress)
router.post('/delete',deleteAddress)

export default router 