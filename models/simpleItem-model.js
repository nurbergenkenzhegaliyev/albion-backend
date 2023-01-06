import mongoose from "mongoose";

const SimpleItemSchema = new mongoose.Schema({
    "@uniquename": {
      "type": "String"
    },
    "@tier": {
      "type": Number
    },
    "@weight": {
      "type": Number
    },
    "@maxstacksize": {
      "type": Number
    },
    "@uisprite": {
      "type": "String"
    },
    "@shopcategory": {
      "type": "String"
    },
    "@shopsubcategory1": {
      "type": "String"
    },
    "@descriptionlocatag": {
      "type": "String"
    },
    "@descvariable0": {
      "type": "String"
    },
    "@descvariable1": {
      "type": "String"
    },
    "@unlockedtocraft": {
      "type": "String"
    },
    "@itemvalue": {
      "type": Number
    },
    "@salvageable": {
      "type": "String"
    },
    "craftingrequirements": {
      "@time": {
        "type": Number
      },
      "craftresource": {
        "@uniquename": {
          "type": "String"
        },
        "@count": {
          "type": Number
        }
      }
    }
  });
  
  export default mongoose.model("SimpleItem", SimpleItemSchema);
  