import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, unique: true, required: true },
  text: { type: Object, required: true },
  created: {type: Date, required: true, default: new Date()},
  section: {type: String, required: true}
});

export default mongoose.model("Blog", BlogSchema);
