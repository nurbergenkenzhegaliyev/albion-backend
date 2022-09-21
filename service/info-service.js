import ApiError from '../exceptions/api-error.js';
import infoModel from '../models/info-model.js'
import resourcePriceModel from "../models/resourcePrice-model.js";

class InfoService {
    async createResourcePrice(userId) {
        const resourceData = await resourcePriceModel.findOne({user: userId})
        if(resourceData) {
            return console.log('error, there is a resourcedb ')
        }
        
        const resource = await resourcePriceModel.create({user: userId});
        return resource; 
    }

    async getResourcePrices(userId) { 
        const resourcePrices = await resourcePriceModel.findOne({user: userId});
        return resourcePrices;
    }

    async changeResourcePrice(id, name, price) {
        const resources = await resourcePriceModel.findOne({user: id}) 
        await resources.updateOne({[name] : price});
    }
    async createCraftingItemsArray(userId) {
        try {
            const info = await infoModel.findOne({userId});
            if(info){
                throw ApiError.BadRequest('БД инфо для этого пользователя существует')
            }

            const template = await infoModel.create({user: userId});
            return template;

        } catch (error) {
            return error;
        }
    }

    async getCraftingItems(userId) {
        const info = await infoModel.findOne({user: userId});
        return info.craftingItems;
    }

    async addCraftingItem() {
        try {
            
        } catch (error) {
            return error;
        }
    }

    async removeCraftingItem() {
        try {
            
        } catch (error) {
            return error;
        }
    }
}

export default new InfoService();