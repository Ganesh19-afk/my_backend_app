"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOtp = exports.sendOTP = void 0;
const prismaClient_1 = __importDefault(require("../../prisma/prismaClient"));
const otpGenerator_1 = require("../scripts/otpGenerator");
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
    },
});
const sendOTP = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            res.status(400).json({ error: "Email is required" });
            return;
        }
        const user = await prismaClient_1.default.user.findUnique({ where: { email } });
        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }
        const otp = (0, otpGenerator_1.generateOTP)();
        const resetToken = (0, otpGenerator_1.generateResetToken)(); // e.g., secure hex string
        const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes
        await prismaClient_1.default.user.update({
            where: { email },
            data: {
                otp,
                otpExpiry,
                resetToken,
            },
        });
        // Send OTP via email using nodemailer
        await transporter.sendMail({
            from: ' <${process.env.MAILTRAP_USER}>',
            to: email,
            subject: "Your One-Time Password (OTP) for Secure Access",
            html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #2E86C1;">Hello ${user.name || "User"},</h2>
      <p>We received a request to access your account.</p>
      <p>Your One-Time Password (OTP) is:</p>
      <h1 style="letter-spacing: 4px; color: #34495E;">${otp}</h1>
      <p>This code is valid for the next <strong>5 minutes</strong>. Please do not share this code with anyone to keep your account secure.</p>
      <p>If you did not request this, please contact our support team immediately.</p>
      <br/>
      <p>Thank you,<br/><strong>MyApp Support Team</strong></p>
      <hr/>
      <small style="color: #888;">This is an automated message, please do not reply.</small>
    </div>
  `,
        });
        res.status(200).json({
            message: "OTP sent successfully",
            expiresIn: "5 minutes",
        });
    }
    catch (e) {
        console.error("sendOTP error:", e);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.sendOTP = sendOTP;
const verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
    try {
        const user = await prismaClient_1.default.user.findUnique({
            where: { email }
        });
        if (!user) {
            res.status(401).json({ Error: 'Enter valid credentials' });
            return;
        }
        if (user.otp !== otp) {
            res.status(401).json({ Error: 'Enter valid otp' });
            return;
        }
        if (!user.otpExpiry || new Date(user.otpExpiry) < new Date()) {
            // Clear expired OTP
            await prismaClient_1.default.user.update({
                where: { email },
                data: {
                    otp: null,
                    otpExpiry: null,
                    resetToken: null,
                },
            });
            res.status(400).json({ error: "OTP has expired" });
            return;
        }
        // OTP is valid — clear OTP fields
        await prismaClient_1.default.user.update({
            where: { email },
            data: {
                otp: null,
                otpExpiry: null,
                resetToken: null,
            },
        });
        res.status(200).json({ message: "OTP verified successfully", verified: true });
    }
    catch (e) {
        res.status(500).json(e);
    }
};
exports.verifyOtp = verifyOtp;
