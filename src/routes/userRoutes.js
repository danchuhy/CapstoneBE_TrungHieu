import express from 'express';
import { checkToken, isLogin } from '../config/jwt.js';
import { 
    // uploadMultipleAvatar, 
    // uploadSingleAvatar,
    getUserDetail, 
    updateUserDetail, 
} from '../controllers/userControllers.js';

const userRoutes = express.Router();

// userRoutes.post("/upload-avatar",isLogin ,storage.single("file"),
// uploadSingleAvatar);
// userRoutes.post("/upload-multiple-avatar", storage.array("files"), uploadMultipleAvatar)
userRoutes.get("/get-user-detail/:userId", isLogin, getUserDetail)
userRoutes.put("/update-user-detail/:userId", isLogin, updateUserDetail)

export default userRoutes;