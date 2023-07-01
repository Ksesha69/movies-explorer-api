const routerAuth = require('express').Router();

const { validatorLogin, validatorRegister } = require('../utils/validator');
const { createUser, login } = require('../controllers/users');

routerAuth.post('/signup', validatorRegister, createUser);
routerAuth.post('/signin', validatorLogin, login);

module.exports = routerAuth;
