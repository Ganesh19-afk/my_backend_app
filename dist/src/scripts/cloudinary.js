"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinary = exports.cloudinaryStorage = void 0;
const cloudinary_1 = require("cloudinary");
Object.defineProperty(exports, "cloudinary", { enumerable: true, get: function () { return cloudinary_1.v2; } });
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
exports.cloudinaryStorage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.v2,
    params: async (req, file) => ({
        folder: 'ecommerce-products',
        format: 'webp', // or file.mimetype.split('/')[1]
        public_id: `${Date.now()}-${file.originalname.split('.')[0]}`,
        transformation: [{ width: 800, height: 800, crop: 'limit' }],
    }),
});
