
const express = require('express');
const UserController = require('../controllers/user.controller');
const UserService = require('../services/user.service');
const validAccessToken = require('../utils/acces-token.utils');
const validationCreateUser = require('../models/user.model');

const userService = new UserService()
const userController = new UserController(userService);

module.exports = function () {
    const router = express.Router();

    router.post('/login', (req, res, next) => {
        userController.login(req, res, next)
    });

    router.post('/',
        [
            validationCreateUser,
            (req, res) => {
                userController.createUser(req, res)
            }
        ]
    );

    router.get('/:id', validAccessToken,
        (req, res) => {
            userController.getById(req, res)
        }
    );

    return router
}

// module.exports = {
//     key1: value1, // type any
//     key2: value2,
//     key2: function() {},
// }