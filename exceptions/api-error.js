export default class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'Пользователь не авторизован')
    }

    static AdminError() {
        return new ApiError(401, 'Пользователь не имеет доступ')
    }

    static BlogGetAllError() {
        return new ApiError(401, 'Нет блогов')
    }

    static BlogExistsError() {
        return new ApiError(401, 'Блог существует')
    }

    static BlogNotExistsError() {
        return new ApiError(401, 'Блог не уществует')
    }

    static BlogEmptyError() {
        return new ApiError(401, 'Блогов нет')
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors)
    }

    
}