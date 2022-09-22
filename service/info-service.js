import mongoose from "mongoose";
import ApiError from "../exceptions/api-error.js";
import infoModel from "../models/info-model.js";
import resourcePriceModel from "../models/resourcePrice-model.js";
import craftingItemModel from "../models/craftingItem-model.js";
import itemLocaliztionModel from "../models/itemLocalizations-model.js";
class InfoService {
  async createResourcePrice(userId) {
    const resourceData = await resourcePriceModel.findOne({ user: userId });
    if (resourceData) {
      return console.log("error, there is a resourcedb ");
    }

    const resource = await resourcePriceModel.create({ user: userId });
    return resource;
  }

  async getResourcePrices(userId) {
    const resourcePrices = await resourcePriceModel.findOne({ user: userId });
    return resourcePrices;
  }

  async changeResourcePrice(id, name, price) {
    const resources = await resourcePriceModel.findOne({ user: id });
    await resources.updateOne({ [name]: price });
  }
  async createCraftingItemsArray(userId) {
    try {
      const info = await infoModel.findOne({ userId });
      if (info) {
        throw ApiError.BadRequest("БД инфо для этого пользователя существует");
      }

      const template = await infoModel.create({ user: userId });
      return template;
    } catch (error) {
      return error;
    }
  }

  async getCraftingItems(userId) {
    const info = await infoModel.findOne({ user: userId });
    return info.craftingItems;
  }

  async addCraftingItem(userId, craftingItem) {
    try {
      const info = await infoModel.findOne({
        user: userId,
        craftingItems: craftingItem,
      });
      console.log(info);
      if (!info) {
        return await infoModel.updateOne(
          { user: userId },
          { $push: { craftingItems: craftingItem } }
        );
      } else {
        return "Item already exists in array";
      }
    } catch (error) {
      return error;
    }
  }

  async removeCraftingItem(userId, craftingItem) {
    try {
      const info = await infoModel.findOne({
        user: userId,
        craftingItems: craftingItem,
      });
      console.log(info);
      if (info) {
        return await infoModel.updateOne(
          { user: userId },
          { $pull: { craftingItems: craftingItem } }
        );
      } else {
        return "There is no such item";
      }
    } catch (error) {
      return error;
    }
  }

  async getItemInfo(uniquename) {
    try {
      const item = await craftingItemModel.findOne({
        "@uniquename": uniquename,
      });
      return item;
    } catch (error) {
      return "there is no such item";
    }
  }

  async getItemLocalization(uniquename) {
    try {
      const item = await itemLocaliztionModel.findOne({
        UniqueName: uniquename,
      });
      return item;
    } catch (error) {
      return "There is no localization for this item";
    }
  }
}

export default new InfoService();
