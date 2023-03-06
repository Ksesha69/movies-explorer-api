const NotFound = require('../errors/notFound');

const notFound = (req, res, next) => {
  next(new NotFound());
};

module.exports = notFound;
