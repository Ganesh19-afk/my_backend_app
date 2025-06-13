"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseTest = void 0;
const responseTest = async (req, res) => {
    res.status(200).json({ message: "response got " });
};
exports.responseTest = responseTest;
