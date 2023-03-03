const routerAuth = require('express').Router();

const { validatorLogin } = require('../utils/validator');
const { createUser, login } = require('../controllers/users');

routerAuth.post('/signup', validatorLogin, createUser);
routerAuth.post('/signin', validatorLogin, login);

module.exports = routerAuth;
