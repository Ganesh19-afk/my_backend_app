import express from 'express';
import { getInvoicePdf } from '../controllers/invoice.controller';

const router = express.Router();

router.get('/invoice/:orderId', getInvoicePdf);


export default router;
