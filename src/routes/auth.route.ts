import { Router } from 'express';
import { upload } from '../../middlewares/upload.middleware';
import { registerUser, loginUser, changePassword, resetPasswordWithOtp } from '../controllers/auth.controller';
import { sendOTP, verifyOtp } from '../controllers/sendOTP.controller';

const router = Router();

router.post("/register", upload.single("profile"), registerUser);
router.post("/login", loginUser);
router.post("/changepassword",changePassword)
router.post('/sendotp',sendOTP)
router.post('/verifyotp',verifyOtp)
router.post('/resetpassword',resetPasswordWithOtp)

export default router;
