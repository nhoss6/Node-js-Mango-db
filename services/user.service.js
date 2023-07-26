const HttpError = require('../utils/http-error.utils.js');
const jwt = require('jsonwebtoken');

require('../models/user.model.js');

class UserService {
    async createUser(newUserDto) {
        const newUser = new User(newUserDto);
        newUser.save();
        return newUser;
    }

    async login(userDto) {
        const user = await User.findOne({ email: userDto.email, password: userDto.password }).select({ _id: true, email: true }).exec();

        if (!user) throw new HttpError("L'email ou le mot de passe est incorrect", 500)

        const userFind = { ...user }._doc

        const token = jwt.sign(userFind, process.env.PRIVATE_KEY_JWT, { expiresIn: process.env.EXPIRE_TIME_JWT });

        return token;
    }

    async getAllUsers() {
        const users = await User.find();
        return users;
    }

    async getById(_id) {
        // recup de la data via mongodb
        const user = await User.findOne({ _id }).exec();
        return user;
    }

    async deleteById(id) {
        // suppression d'un user en bdd avec mongoose
        const user = await User.deleteOne({ _id: id }).exec();

        return user;
    }
}

module.exports = UserService;