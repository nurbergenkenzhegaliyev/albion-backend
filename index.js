import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import mongoose from "mongoose";
import authRouter from "./router/authRouter.js";
import blogRouter from './router/blogRouter.js';
import cors from "cors";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middleware/error-middleware.js";
import infoRouter from "./router/infoRouter.js";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const PORT = process.env.PORT || 5000;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// let inital_path = path.join(__dirname, "public");

const app = express();
// app.use(express.static(inital_path));


app.use(json());
app.use(cors());
app.use(cookieParser());
app.use("/auth", authRouter);
app.use("/info", infoRouter);
app.use("/blog", blogRouter);
app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send("hellow world");
})

const start = async () => {
  try {
    mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
