const routerUser = require('express').Router();
const { validatorUserInfo } = require('../utils/validator');

const { getUserInfo, changeUser } = require('../controllers/users');

routerUser.get('/me', getUserInfo);
routerUser.patch('/me', validatorUserInfo, changeUser);

module.exports = routerUser;
