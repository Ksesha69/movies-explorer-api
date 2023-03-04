const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

module.exports.validatorUserInfo = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().email(),
  }),
});

module.exports.validatorCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().min(2).max(30),
    director: Joi.string().required().min(2).max(30),
    duration: Joi.number().required(),
    year: Joi.string().required().min(2).max(4),
    description: Joi.string().required().min(2).max(3000),
    image: Joi.string().required().custom((value) => {
      if (!validator.isURL(value)) {
        throw new Error('Ошибка валидации. Введён не URL');
      }
      return value;
    }),
    trailerLink: Joi.string().required().custom((value) => {
      if (!validator.isURL(value)) {
        throw new Error('Ошибка валидации. Введён не URL');
      }
      return value;
    }),
    thumbnail: Joi.string().required().custom((value) => {
      if (!validator.isURL(value)) {
        throw new Error('Ошибка валидации. Введён не URL');
      }
      return value;
    }),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required().min(1).max(200),
    nameEN: Joi.string().required().min(1).max(200),
  }),
});

module.exports.validatorMovieId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().required().length(24),
  }),
});

module.exports.validatorLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports.validatorRegister = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});
