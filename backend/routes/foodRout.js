import express from 'express'
import { addFood, listFood, removeFood } from '../controllers/foodController.js'
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary';
const foodRouter = express.Router();
import 'dotenv/config'
// image storage engine
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'uploads', // Folder in your Cloudinary account
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
  },
});

const upload = multer({
    storage:storage
})

foodRouter.post('/add',upload.single('image'),addFood)
foodRouter.get('/list',listFood)
foodRouter.post('/remove',removeFood)


export default foodRouter;