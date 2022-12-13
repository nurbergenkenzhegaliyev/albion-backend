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
      await infoService.changeResourcePrice(id, name, price);
      return res.json(await infoService.getResourcePrices(id));
    } catch (error) {
      next(error);
    }
  }
  
  async getCraftingItems(req, res, next) {
    try {
      const { id } = req.body;
      const info = await infoService.getCraftingItems(id);
      return res.json(info);
    } catch (error) {
      next(error);
    }
  }

  async addCraftingItem(req, res, next) {
    try {
      const { id, craftingItem } = req.body;
      const data = await infoService.addCraftingItem(id, craftingItem);
      const dataPrices = await infoService.addCraftingItemSellPrices(id, {name: craftingItem["@uniquename"], priceList: [0,0,0,0,0]});
      res.json({data, dataPrices});
    } catch (error) {
      next(error)
    }
  }

  async removeCraftingItem(req, res, next) {
    try {
      const { id, craftingItem } = req.body;
      const data = await infoService.removeCraftingItem(id, craftingItem);
      res.json(data);
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

  async addCraftingItemSellPrices(req, res, next) {
    try {
      const { id, price } = req.body;
      const data = await infoService.addCraftingItemSellPrices(id, price);
      res.json(data);
    } catch (error) {
      next(error)
    }
  }
}

export default new InfoController();
