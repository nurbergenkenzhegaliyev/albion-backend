import dotenv from 'dotenv'
dotenv.config()
import express, { json } from 'express';
import mongoose from 'mongoose';
import authRouter from './router/authRouter.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import errorMiddleware from './middleware/error-middleware.js';
import infoRouter from './router/infoRouter.js';
import path from 'path'

const PORT = process.env.PORT || 5000;

const app = express();
const __dirname = path.resolve();
app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req,res) => {
    res.sendFile(oath.join(__dirname, 'build', 'index.html'));
})



app.use(json());
app.use(cors());
app.use(cookieParser());
app.use("/auth", authRouter); 
app.use("/info", infoRouter);
app.use(errorMiddleware);


const start = async () => { 
    try {
        await mongoose.connect(process.env.DB_URL);
        app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
};

start();

