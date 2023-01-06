import mongoose from "mongoose";
import ApiError from "../exceptions/api-error.js";
import infoModel from "../models/info-model.js";
import resourcePriceModel from "../models/resourcePrice-model.js";
import craftingItemModel from "../models/craftingItem-model.js";
import itemLocaliztionModel from "../models/itemLocalizations-model.js";
import simpleItemModel from "../models/simpleItem-model.js";

class InfoService {
  // Creates a seperate document wit resource prices
  // referenced ot the user
  async createResourcePrice(userId) {
    const resourceData = await resourcePriceModel.findOne({ user: userId });
    if (resourceData) {
      return console.log("error, there is a resourcedb ");
    }

    const resource = await resourcePriceModel.create({ user: userId });
    return resource;
  }

  // Get reource price document with "user: userId"
  async getResourcePrices(userId) {
    const resourcePrices = await resourcePriceModel.findOne({ user: userId });
    return resourcePrices;
  }

  // Change price of exact resource
  // Takes name and price of changed resources and update it in the document
  async changeResourcePrice(id, name, price) {
    const resources = await resourcePriceModel.findOne({ user: id });
    await resources.updateOne({ [name]: price });
  }

  // Create seperate infoModel for new user
  async createCraftingItemsArray(userId) {
    try {
      const info = await infoModel.findOne({ userId });
      if (!info) {
        throw ApiError.BadRequest("БД инфо для этого пользователя существует");
      }

      const template = await infoModel.create({ user: userId });
      return template;
    } catch (error) {
      return error;
    }
  }

  // Get crafting items list of an exact user
  async getCraftingItems(userId) {
    const info = await infoModel.findOne({ user: userId });
    console.log(info)
    return info;
  }

  // Add new crafting item to user crafting item list
  async addCraftingItem(userId, craftingItem, maker) {
    try {
      // Find infoModel with "craftingItem" in "craftingItems.maker" array
      // maker=[hunter, mage, warrior, toolmaker]
      const info = await infoModel.findOne({
        user: userId,
        [`craftingItems.${maker}`]:craftingItem
      }); 
      // If there is no such document
      if (!info) {
        // Update document with userId
        // Push "craftingItem" to "craftinItems.maker" array
        await infoModel.updateOne(
          { user: userId },
          { $push: { [`craftingItems.${maker}`]:craftingItem} }
        );
      }
      // return "craftingItems" array
      const user = await infoModel.findOne({ user: userId });
      return user.craftingItems;
    } catch (error) {
      return error;
    }
  }

  // Remove crafting item from crafting items list
  async removeCraftingItem(userId, craftingItem, maker) {
    try {
      const info = await infoModel.findOne({
        user: userId,
        [`craftingItems.${maker}`]:craftingItem
      });
      if (info) {
        await infoModel.updateOne(
          { user: userId },
          { $pull: { [`craftingItems.${maker}`]:craftingItem} }
        );
        const user = await infoModel.findOne({ user: userId });
        return user.craftingItems;
      } else {
        const user = await infoModel.findOne({ user: userId });
        return user.craftingItems;
      }
    } catch (error) {
      return error;
    }
  }

  // Get information about a item with uniquename
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

  // Get information about a Simple item with uniquename
  async getSimpleItemInfo(uniquename) {
    try {
      const item = await simpleItemModel.findOne({
        "@uniquename": uniquename,
      });
      return item;
    } catch (error) {
      return "there is no such item";
    }
  }

  // Get localization info for an item with uniquename
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

  // Add new crafting item to user crafting item list
  async addCraftingItemSellPrices(userId, inprice) {
    try {
      // Find infoModel with "price" in "prices" array
      const info = await infoModel.findOne({
        user: userId,
        "prices.name": inprice.name,
      });
      // If there is no such document
      if (!info) {
        // Update document with userId
        // Push "price" to "prices" array
        await infoModel.updateOne(
          { user: userId },
          { $push: { prices: inprice } }
        );
      } else {
        
        // info.update({"prices.name":inprice.name}, {$set: {"prices.$.priceList" : inprice.priceList}})
        await infoModel.updateOne(
          {
            user: userId, 
            "prices.name":inprice.name
          },
          {
            $set : {
              "prices.$.priceList" : inprice.priceList
            }
          }
        )
      }


      // return "prices" array
      const user = await infoModel.findOne({ user: userId });
      return user.prices;
    } catch (error) {
      return error;
    }
  }

  // Add new crafting item to user crafting item list
  async removeCraftingItemSellPrices(userId, uniquename) {
    try {
      // Find infoModel with "price" in "prices" array
      const info = await infoModel.findOne({
        user: userId,
        "prices.name": uniquename,
      });

      if (info) {
        await infoModel.updateOne(
          { user: userId },
          { $pull: { prices: {name: uniquename} } }
        );
      } 

      // return "prices" array
      const user = await infoModel.findOne({ user: userId });
      return user.prices;
    } catch (error) {
      return error;
    }
  }


}// Class end



export default new InfoService();
