import UserModel from '../models/user-model.js';
import bcrypt from 'bcryptjs';
import tokenService from './token-service.js';
import UserDto from '../dtos/user-dto.js'
import ApiError from '../exceptions/api-error.js';
import infoService from '../service/info-service.js'

class userService {
    async registraion(username, password) {
        const candidate = await UserModel.findOne({username});
        if(candidate) {
            throw  ApiError.BadRequest(`Пользователь с никнеймом ${username} уже существует`)
        }
        const hassPassword = await bcrypt.hash(password, 3);
        const user = await UserModel.create({username, password: hassPassword});

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await infoService.createResourcePrice(userDto.id);
        await infoService.createCraftingItemsArray(userDto.id);
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto};
    }

    async login(username, password) {
        const user = await UserModel.findOne({username});
        if(!user) {
            throw ApiError.BadRequest('Пользователь с таким ником не найден');
        }

        const isPassEquals = await bcrypt.compare(password, user.password);
        if(!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль');
        }

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto};

    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }

        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }
        const user = await UserModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto};
    }

    async getAllUser() {
        const users = UserModel.find();
        return users;
    }
}

export default new userService();