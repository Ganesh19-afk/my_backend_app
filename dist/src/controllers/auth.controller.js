"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = exports.resetPasswordWithOtp = exports.loginUser = exports.registerUser = void 0;
const hash_1 = require("../scripts/hash");
const prisma_1 = __importDefault(require("../Db/prisma"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = require("../scripts/jwt");
const registerUser = async (req, res) => {
    try {
        const { name, email, } = req.body;
        const password = String(req.body.password);
        const age = req.body.age ? Number(req.body.age) : undefined;
        const profile = req.file?.filename;
        if (!name || !email || !password || !profile) {
            res.status(400).json({ error: "All fields are required" });
            return;
        }
        const existingUser = await prisma_1.default.user.findUnique({ where: { email } });
        if (existingUser) {
            res.status(400).json({ error: "User already exists" });
            return;
        }
        const hashed = await (0, hash_1.hashPassword)(password);
        const user = await prisma_1.default.user.create({
            data: {
                name,
                email,
                age: Number(age),
                password: hashed,
                profile,
            },
        });
        res.status(201).json({
            message: "User registered successfully",
            user: { id: user.id, email: user.email, name: user.name, profile: user.profile },
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.registerUser = registerUser;
const loginUser = async (req, res) => {
    try {
        const email = req.body.email;
        console.log(req.body, "data");
        const password = String(req.body.password);
        if (!email || !password) {
            res.status(400).json({ error: "Email and password required" });
            return;
        }
        const user = await prisma_1.default.user.findUnique({ where: { email } });
        if (!user || !user.password) {
            res.status(401).json({ error: "Invalid email or password" });
            return;
        }
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ error: "Invalid email or password" });
            return;
        }
        const token = (0, jwt_1.generateToken)({ userId: user.id, role: user.role });
        res.json({
            message: "Login successful",
            user: { id: user.id, email: user.email, name: user.name, profile: user.profile },
            token,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.loginUser = loginUser;
const resetPasswordWithOtp = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: 'Email and newpassword are required.' });
        return;
    }
    try {
        const user = await prisma_1.default.user.findUnique({ where: { email } });
        if (!user) {
            res.status(400).json({ message: "user not found " });
        }
        const hashedPassword = await (0, hash_1.hashPassword)(password);
        await prisma_1.default.user.update({
            where: { email },
            data: {
                password: hashedPassword,
            },
        });
        res.status(200).json({ message: "Password reset successfully" });
    }
    catch (e) {
        res.status(500).json({ error: 'Server error. Please try again later.' });
        return;
    }
};
exports.resetPasswordWithOtp = resetPasswordWithOtp;
const changePassword = async (req, res) => {
    const { email, oldPassword, newPassword } = req.body;
    console.log(req.body);
    if (!email || !oldPassword || !newPassword) {
        res.status(400).json({ error: 'Email, old password, and new password are required.' });
        return;
    }
    try {
        // 1. Find the user
        const user = await prisma_1.default.user.findUnique({ where: { email } });
        if (!user) {
            res.status(404).json({ error: 'User not found.' });
            return;
        }
        // 2. Compare old password
        const isMatch = await bcryptjs_1.default.compare(oldPassword, user.password);
        if (!isMatch) {
            res.status(401).json({ error: 'Old password is incorrect.' });
            return;
        }
        // 3. Hash new password
        const hashedPassword = await bcryptjs_1.default.hash(newPassword, 10);
        // 4. Update password
        await prisma_1.default.user.update({
            where: { email },
            data: { password: hashedPassword },
        });
        res.status(200).json({ message: 'Password updated successfully.' });
        return;
    }
    catch (err) {
        console.error('Reset password error:', err);
        res.status(500).json({ error: 'Server error. Please try again later.' });
        return;
    }
};
exports.changePassword = changePassword;
