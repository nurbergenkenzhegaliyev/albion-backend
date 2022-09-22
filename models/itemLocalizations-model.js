import mongoose from "mongoose";

const ItemLocalizationSchema = new mongoose.Schema({
  LocalizationNameVariable: {
    type: "String",
  },
  LocalizationDescriptionVariable: {
    type: "String",
  },
  LocalizedNames: {
    "EN-US": {
      type: "String",
    },
    "DE-DE": {
      type: "String",
    },
    "FR-FR": {
      type: "String",
    },
    "RU-RU": {
      type: "String",
    },
    "PL-PL": {
      type: "String",
    },
    "ES-ES": {
      type: "String",
    },
    "PT-BR": {
      type: "String",
    },
    "ZH-CN": {
      type: "String",
    },
    "KO-KR": {
      type: "String",
    },
  },
  LocalizedDescriptions: {
    "EN-US": {
      type: "String",
    },
    "DE-DE": {
      type: "String",
    },
    "FR-FR": {
      type: "String",
    },
    "RU-RU": {
      type: "String",
    },
    "PL-PL": {
      type: "String",
    },
    "ES-ES": {
      type: "String",
    },
    "PT-BR": {
      type: "String",
    },
    "ZH-CN": {
      type: "String",
    },
    "KO-KR": {
      type: "String",
    },
  },
  Index: {
    type: "Date",
  },
  UniqueName: {
    type: "String",
  },
});

export default mongoose.model("ItemLocaliztion", ItemLocalizationSchema);
