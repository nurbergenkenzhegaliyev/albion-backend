import mongoose from "mongoose";

const InfoSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  craftingItems: { type: Array, default: [] },
});

export default mongoose.model("Info", InfoSchema);
