import { Router } from "express";
import infoController from "../controllers/info-controller.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = new Router();
router.post(
  "/getCraftingItems",
  authMiddleware,
  infoController.getCraftingItems
);
router.post(
  "/addCraftingItem",
  authMiddleware,
  infoController.addCraftingItem
);
router.post(
  "/removeCraftingItem",
  authMiddleware,
  infoController.removeCraftingItem
);
router.post("/getItemInfo", infoController.getItemInfo);
router.post("/getSimpleItemIV", infoController.getSimpleItemIV);
router.post("/getItemLocalization", infoController.getItemLocaliztion);


router.post(
  "/addPrice",
  authMiddleware,
  infoController.addCraftingItemSellPrices
);

export default router;
