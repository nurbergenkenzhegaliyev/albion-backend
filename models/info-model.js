import mongoose from "mongoose";

const InfoSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  craftingItems: { 
    hunter: {type: Array, default: []},
    mage: {type: Array, default: []},
    warrior: {type: Array, default: []},
    toolmaker: {type: Array, default: []},
   },
  prices: { type: Array, default: [] },
});

export default mongoose.model("Info", InfoSchema);
