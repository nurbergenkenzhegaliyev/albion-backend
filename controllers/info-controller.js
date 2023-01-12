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
      const { id, craftingItem, maker } = req.body;
      const data = await infoService.addCraftingItem(id, craftingItem, maker);
      const dataPrices = await infoService.addCraftingItemSellPrices(id, {name: craftingItem["@uniquename"], priceList: [0,0,0,0,0]});

      

      res.json({data, dataPrices});
    } catch (error) {
      next(error)
    }
  }
 
  async removeCraftingItem(req, res, next) {
    try {
      const { id, craftingItem, maker } = req.body;
      console.log("craftingItem", craftingItem)
      const craftingItems = await infoService.removeCraftingItem(id, craftingItem, maker);
      const prices = await infoService.removeCraftingItemSellPrices(id, craftingItem["@uniquename"])
      res.json({craftingItems, prices});
      // res.json(prices)
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

  async getSimpleItemIV(req, res, next) {
    try {
      const { uniquename } = req.body;
      const item = await infoService.getSimpleItemIV(uniquename);
      res.json(item);
    } catch (error) {
      next(error);
    }
  }

  async getItemLocaliztion(req, res, next) {
    try {
      const { uniqueName } = req.body;
      const itemLocalization = await infoService.getItemLocalization(
        uniqueName
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
