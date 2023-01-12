export default class UserDto {
    username;
    id;
    status;
    
    constructor(model) {
        this.username = model.username;
        this.id = model._id;
        this.status = model.status;
    }
}
