import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from '../middleware/adminMiddleware.js';
import blogController from '../controllers/blogController.js';

const router = new Router();


router.get("/getAll", authMiddleware, adminMiddleware, blogController.getAll);
router.post("/create", authMiddleware, adminMiddleware, blogController.createBlog);
router.post("/delete", authMiddleware, adminMiddleware, blogController.deleteBlog);
router.post("/edit/:id", authMiddleware, adminMiddleware);

export default router;