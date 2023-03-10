import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from '../middleware/adminMiddleware.js';
import blogController from '../controllers/blogController.js';

const router = new Router();


router.get("/getAll", blogController.getAll);
router.post("/getBlog", blogController.getBlog);
router.post("/create", authMiddleware, adminMiddleware, blogController.createBlog);
router.post("/delete", authMiddleware, adminMiddleware, blogController.deleteBlog);
router.post("/edit", authMiddleware, adminMiddleware, blogController.editBlog);

export default router;