import express from 'express';
import authRoutes from './authRoutes.js';
import userRoutes from './userRoutes.js';
import imageRoutes from './imageRoutes.js';
import commentRoutes from './commentRoutes.js';
import saveImageRoutes from './saveImageRoutes.js';


const rootRoutes = express.Router();

rootRoutes.use("/user", userRoutes);
rootRoutes.use("/auth", authRoutes);
rootRoutes.use("/image", imageRoutes);
rootRoutes.use("/comment", commentRoutes);
rootRoutes.use("/saveImage", saveImageRoutes);


export default rootRoutes;