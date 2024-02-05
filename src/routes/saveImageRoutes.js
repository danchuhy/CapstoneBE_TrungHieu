import express from 'express';
import { checkToken, isLogin } from '../config/jwt.js';
import { 
    isSavedImage, 
    getSavedImageListByUser 
} from '../controllers/saveImageControllers.js';

const imageRoutes = express.Router();

imageRoutes.get("/get-saved-image-list-by-user/:userId", isLogin, getSavedImageListByUser)
imageRoutes.get("/isSavedImage/:imageId", isLogin, isSavedImage)

export default imageRoutes;
