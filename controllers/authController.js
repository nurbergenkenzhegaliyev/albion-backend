import User from "../models/user-model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { secret } from '../config.js';
import { validationResult } from 'express-validator';

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}
 
class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req);

            if(!errors.isEmpty()){
                return res.status(400).json({message: "Ошибка при регистрации", errors})
            }

            const {username, password} = req.body;
            const candidate = await User.findOne({username})

            if(candidate) {
                return res.status(400).json({message: 'User with this username exists'})
            }

            const hashPassword = bcrypt.hashSync(password, 7)
            const user = new User({username, password: hashPassword})
            await user.save();
            return res.json({message: "Успешно зарегистрирован"})
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'Registration error'})
        }
    }
    async login(req, res) {
        try {
            const {username, password} = req.body;
            const user = await User.findOne({username})

            if(!user){
                return res.status(400).json({message: `User ${username} not found`})
            }

            const validPassword = bcrypt.compareSync(password, user.password)

            if(!validPassword){
                return res.status(400).json({message: `Ввенден неверный пароль`})
            }
            
            const token = generateAccessToken(user._id);
            return res.json({token})

        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'Login error'})
        }
    }
}

export default new authController();