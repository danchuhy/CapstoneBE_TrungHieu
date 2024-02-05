import express from 'express';
import { login,
        //  loginFacebook, 
         signUp 
} from '../controllers/authControllers.js';

const authRoutes = express.Router();

// authRoutes.post("/login-facebook", loginFacebook);
authRoutes.post("/login", login);
authRoutes.post("/signup", signUp);

export default authRoutes;