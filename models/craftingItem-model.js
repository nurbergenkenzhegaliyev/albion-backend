import mongoose from "mongoose";

const CraftingItemSchema = new mongoose.Schema({
  "@uniquename": {
    type: "String",
  },
  "@uisprite": {
    type: "String",
  },
  "@slottype": {
    type: "String",
  },
  "@shopcategory": {
    type: "String",
  },
  "@shopsubcategory1": {
    type: "String",
  },
  "@tier": {
    type: "Date",
  },
  "@maxqualitylevel": {
    type: "Date",
  },
  "@itempower": {
    type: "Date",
  },
  "@weight": {
    type: "Date",
  },
  "@activespellslots": {
    type: "Date",
  },
  "@passivespellslots": {
    type: "Date",
  },
  "@abilitypower": {
    type: "Date",
  },
  "@physicalspelldamagebonus": {
    type: "Date",
  },
  "@magicspelldamagebonus": {
    type: "Date",
  },
  "@healbonus": {
    type: "Date",
  },
  "@physicalattackdamagebonus": {
    type: "Date",
  },
  "@magicattackdamagebonus": {
    type: "Date",
  },
  "@bonusccdurationvsplayers": {
    type: "String",
  },
  "@bonusccdurationvsmobs": {
    type: "String",
  },
  "@hitpointsmax": {
    type: "Date",
  },
  "@hitpointsregenerationbonus": {
    type: "Date",
  },
  "@energymax": {
    type: "Date",
  },
  "@energyregenerationbonus": {
    type: "Date",
  },
  "@movespeed": {
    type: "Date",
  },
  "@maxload": {
    type: "Date",
  },
  "@magiccooldownreduction": {
    type: "Date",
  },
  "@physicalarmor": {
    type: "Date",
  },
  "@magicresistance": {
    type: "Date",
  },
  "@crowdcontrolresistance": {
    type: "Date",
  },
  "@durability": {
    type: "Date",
  },
  "@durabilityloss_attack": {
    type: "Date",
  },
  "@durabilityloss_spelluse": {
    type: "Date",
  },
  "@durabilityloss_receivedattack": {
    type: "Date",
  },
  "@durabilityloss_receivedspell": {
    type: "Date",
  },
  "@unlockedtocraft": {
    type: "String",
  },
  "@unlockedtoequip": {
    type: "String",
  },
  "@threatbonus": {
    type: "Date",
  },
  "@itempowerprogressiontype": {
    type: "String",
  },
  "@bonusdefensevsplayers": {
    type: "Date",
  },
  "@bonusdefensevsmobs": {
    type: "Date",
  },
  "@magiccasttimereduction": {
    type: "Date",
  },
  "@attackspeedbonus": {
    type: "Date",
  },
  "@movespeedbonus": {
    type: "Date",
  },
  "@uicraftsoundstart": {
    type: "String",
  },
  "@uicraftsoundfinish": {
    type: "String",
  },
  "@healmodifier": {
    type: "Date",
  },
  "@craftingcategory": {
    type: "String",
  },
  "@scalemodifier": {
    type: "Date",
  },
  "@canbeovercharged": {
    type: "String",
  },
  "@showinmarketplace": {
    type: "String",
  },
  "@energycostreduction": {
    type: "Date",
  },
  "@masterymodifier": {
    type: "String",
  },
  "@combatspecachievement": {
    type: "String",
  },
  craftingspelllist: {
    craftspell: {
      type: ["Mixed"],
    },
  },
  craftingrequirements: {
    "@silver": {
      type: "Date",
    },
    "@time": {
      type: "String",
    },
    "@craftingfocus": {
      type: "Date",
    },
    craftresource: {
      "@uniquename": {
        type: "String",
      },
      "@count": {
        type: "String",
      },
    },
  },
  AudioInfo: {
    "@name": {
      type: "String",
    },
  },
  enchantments: {
    enchantment: {
      type: ["Mixed"],
    },
  },
});

export default mongoose.model("CraftingItem", CraftingItemSchema);
