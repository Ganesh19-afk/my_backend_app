import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const cloudinaryStorage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: 'ecommerce-products',
    format: 'webp', // or file.mimetype.split('/')[1]
    public_id: `${Date.now()}-${file.originalname.split('.')[0]}`,
    transformation: [{ width: 800, height: 800, crop: 'limit' }],
  }),
});

export { cloudinary };
