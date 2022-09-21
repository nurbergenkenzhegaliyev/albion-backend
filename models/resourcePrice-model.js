import mongoose from "mongoose";

const ResourcePriceSchema = new mongoose.Schema({
    "user": {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    "T4_PLANKS": {type: Number, default: 111},
    "T4_PLANKS_LEVEL1@1": {type: Number, default: 0},
    "T4_PLANKS_LEVEL2@2": {type: Number, default: 0},
    "T4_PLANKS_LEVEL3@3": {type: Number, default: 0},
    "T4_CLOTH": {type: Number, default: 0},
    "T4_CLOTH_LEVEL1@1": {type: Number, default: 0},
    "T4_CLOTH_LEVEL2@2": {type: Number, default: 0},
    "T4_CLOTH_LEVEL3@3": {type: Number, default: 0},
    "T4_METAL": {type: Number, default: 0},
    "T4_METAL_LEVEL1@1": {type: Number, default: 0},
    "T4_METAL_LEVEL2@2": {type: Number, default: 0},
    "T4_METAL_LEVEL3@3": {type: Number, default: 0},
    "T4_LEATHER": {type: Number, default: 0},
    "T4_LEATHER_LEVEL1@1": {type: Number, default: 0},
    "T4_LEATHER_LEVEL2@2": {type: Number, default: 0},
    "T4_LEATHER_LEVEL3@3": {type: Number, default: 0},
}) 

export default mongoose.model('ResourcePrice', ResourcePriceSchema);