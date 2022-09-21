import { Router } from "express";
const router = new Router();
import infoController from "../controllers/info-controller.js";

import authMiddleware from "../middleware/authMiddleware.js"


router.post('/getCraftingItems', authMiddleware, infoController.getCraftingItems);

export default router;