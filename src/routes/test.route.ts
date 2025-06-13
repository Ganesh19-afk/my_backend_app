import express from 'express';
import { responseTest } from '../controllers/test.controller';

const router = express.Router();

router.get('/testroute',responseTest)

export default router