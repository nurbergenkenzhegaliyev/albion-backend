import { Router } from "express";
const router = new Router();
import infoController from "../controllers/info-controller.js";

import authMiddleware from "../middleware/authMiddleware.js"


router.post('/getCraftingItems', authMiddleware, infoController.getCraftingItems);
router.post('/addCraftingItem', authMiddleware, infoController.addCraftingItem);
router.post('/removeCraftingItem', authMiddleware, infoController.removeCraftingItem);

export default router;