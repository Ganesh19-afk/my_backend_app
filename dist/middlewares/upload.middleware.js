"use strict";
// src/middlewares/upload.middleware.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const cloudinary_1 = require("../src/scripts/cloudinary");
exports.upload = (0, multer_1.default)({ storage: cloudinary_1.cloudinaryStorage });
