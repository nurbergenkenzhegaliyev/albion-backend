import ApiError from "../exceptions/api-error.js";
import infoService from "../service/info-service.js";

class InfoController {
  async getResourcePrice(req, res, next) {
    try {
      const { id } = req.body;
      const prices = await infoService.getResourcePrices(id);
      return res.json(prices);
    } catch (error) {
      next(error);
    }
  }

  async changeResourcePrice(req, res, next) {
    try {
      const { id, name, price } = req.body;
      infoService.changeResourcePrice(id, name, price);
      return res.json({ name, price });
    } catch (error) {
      next(error);
    }
  }

  async getCraftingItemArray(req, res, next) {
    try {
      const { id } = req.body;
      const items = await infoService.getCraftingItems(id);

      return res.json(items);
    } catch (error) {
      next(error);
    }
  }

  async addCraftingItemToArray(req, res, next) {
    try {
      const { id, craftingItem } = req.body;
      const re = await infoService.addCraftingItem(id, craftingItem);
      res.json(re);
    } catch (error) {}
  }

  async removeCraftingItemToArray(req, res, next) {
    try {
      const { id, craftingItem } = req.body;
      const re = await infoService.removeCraftingItem(id, craftingItem);
      res.json(re);
    } catch (error) {
      next(error);
    }
  }
  async getItemInfo(req, res, next) {
    try {
      const { uniquename } = req.body;
      const item = await infoService.getItemInfo(uniquename);
      res.json(item);
    } catch (error) {
      next(error);
    }
  }

  async getItemLocaliztion(req, res, next) {
    try {
      const { UniqueName } = req.body;
      const itemLocalization = await infoService.getItemLocalization(
        UniqueName
      );
      res.json(itemLocalization);
    } catch (error) {
      next(error);
    }
  }
}

export default new InfoController();
