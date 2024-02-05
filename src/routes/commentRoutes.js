import express from 'express';
import { checkToken, isLogin } from '../config/jwt.js';
import { 
    getCommentListByImage, 
    createComment,
} from '../controllers/commentControllers.js';

const commentRoutes = express.Router();

commentRoutes.get("/get-comment-list-by-image/:imageId", getCommentListByImage)
commentRoutes.post("/create-comment/:userId", isLogin, createComment)

export default commentRoutes;
