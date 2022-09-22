import { Router } from "express";
const router = new Router();
import infoController from "../controllers/info-controller.js";

import authMiddleware from "../middleware/authMiddleware.js";

router.post(
  "/getCraftingItemArray",
  authMiddleware,
  infoController.getCraftingItemArray
);
router.post(
  "/addCraftingItemToArray",
  authMiddleware,
  infoController.addCraftingItemToArray
);
router.post(
  "/removeCraftingItemToArray",
  authMiddleware,
  infoController.removeCraftingItemToArray
);
router.post("/getItemInfo", infoController.getItemInfo);
router.post("/getItemLocalization", infoController.getItemLocaliztion);

export default router;
