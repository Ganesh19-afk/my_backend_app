"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeAdmin = exports.authenticate = exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'defaultsecret';
const generateToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, JWT_SECRET, { expiresIn: '5h' });
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, JWT_SECRET);
};
exports.verifyToken = verifyToken;
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader && !authHeader?.startsWith('Token')) {
        res.status(401).json({ message: 'Authorization header missing' });
        return;
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = (0, exports.verifyToken)(token);
        console.log('✅ Decoded token:', decoded);
        req.user = decoded;
        next();
    }
    catch (err) {
        console.error('❌ Token verification failed:', err);
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};
exports.authenticate = authenticate;
const authorizeAdmin = (req, res, next) => {
    console.log('🔐 User role at authorizeAdmin:', req.user?.role);
    if (req.user?.role !== 'ADMIN') {
        res.status(403).json({ message: 'Access denied: Admins only' });
        return;
    }
    next();
};
exports.authorizeAdmin = authorizeAdmin;
