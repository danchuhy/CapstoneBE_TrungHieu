import express from 'express';
import { checkToken, isLogin } from '../config/jwt.js';
import { 
    getImageList,
    getImageDetail,
    getImageListCreatedByUser, 
    createImage,
    deleteImage,
    getImageListByFilter,
} from '../controllers/imageController.js';

const imageRoutes = express.Router();

imageRoutes.get("/get-image-list", getImageList)
imageRoutes.get("/get-image-list-by-filter", getImageListByFilter)
imageRoutes.get("/get-image-detail/:imageId", getImageDetail)
imageRoutes.get("/get-image-list-created-by-user/:userId", isLogin, getImageListCreatedByUser)
imageRoutes.post("/create-image", isLogin, createImage)
imageRoutes.delete("/delete-image/:imageId", isLogin, deleteImage)

export default imageRoutes;
