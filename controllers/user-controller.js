import { validationResult } from "express-validator";
import ApiError from "../exceptions/api-error.js";
import userService from "../service/user-service.js";


class UserController {
    
    async registration(req, res ,next) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const {username, password} = req.body;
            const userData = await userService.registraion(username, password);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30*24*60*60*1000, httpOnly: true});
            return res.json(userData);
        } catch (error) {
            next(error)
        }
    }

    async login(req, res ,next) {
        try {
            const {username, password} = req.body;
            const userData = await userService.login(username, password);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30*24*60*60*1000, httpOnly: true});

            console.log(userData);
            return res.json(userData);

        } catch (error) {
            next(error)
        }
    }

    async logout(req, res ,next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (error) {
            next(error)
            
        }
    }

    async refresh(req, res ,next) {
        try {
                const {refreshToken} = req.cookies;
                const userData = await userService.refresh(refreshToken);
                res.cookie('refreshToken', userData.refreshToken, { maxAge: 30*24*60*60*1000, httpOnly: true});
                return res.json(userData);
        } catch (error) {
            next(error)
            
        }
    }
}

export default new UserController();