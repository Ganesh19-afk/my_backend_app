"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOTPExpired = exports.generateResetToken = exports.generateOTP = void 0;
const crypto_1 = __importDefault(require("crypto"));
const generateOTP = () => {
    return crypto_1.default.randomInt(100000, 999999).toString();
};
exports.generateOTP = generateOTP;
const generateResetToken = () => {
    return crypto_1.default.randomBytes(32).toString("hex");
};
exports.generateResetToken = generateResetToken;
const isOTPExpired = (expiryTime) => {
    return new Date() > expiryTime;
};
exports.isOTPExpired = isOTPExpired;
