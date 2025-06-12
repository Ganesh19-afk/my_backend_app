// src/middlewares/upload.middleware.ts

import multer from 'multer';
import { cloudinaryStorage } from '../src/scripts/cloudinary';

export const upload = multer({ storage: cloudinaryStorage });
