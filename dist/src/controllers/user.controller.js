"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.createUser = void 0;
const prisma_1 = __importDefault(require("../Db/prisma"));
const createUser = async (req, res) => {
    try {
        const { name, age, email, password, profile } = req.body;
        const user = await prisma_1.default.user.create({
            data: { name, age, email, password, profile },
        });
        res.status(200).json(user);
    }
    catch (e) {
        res.status(400).json({ error: e });
    }
};
exports.createUser = createUser;
const getUser = async (req, res) => {
    try {
        const users = await prisma_1.default.user.findMany();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};
exports.getUser = getUser;
