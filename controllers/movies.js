const Movie = require('../models/movie');

const NotFound = require('../errors/notFound');
const BadRequest = require('../errors/badRequest');
const ForbiddenError = require('../errors/ForbiddenError');
const { Delete } = require('../utils/constans');

module.exports.createMovie = (req, res, next) => {
  Movie.create({
    country: req.body.country,
    director: req.body.director,
    duration: req.body.duration,
    year: req.body.year,
    description: req.body.description,
    image: req.body.image,
    trailerLink: req.body.trailerLink,
    thumbnail: req.body.thumbnail,
    owner: req.user._id,
    movieId: req.body.movieId,
    nameRU: req.body.nameRU,
    nameEN: req.body.nameEN,
  })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequest());
        return;
      }
      next(err);
    });
};

module.exports.getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.send(movies))
    .catch(next);
};

module.exports.deleteMovie = (req, res, next) => {
  const userId = req.user._id;

  Movie.findById({ _id: req.params.movieId })
    .then((user) => {
      if (!user) {
        throw new NotFound();
      }
      if (user.owner.toString() !== userId) {
        throw new ForbiddenError();
      }
      Movie.findByIdAndDelete({ _id: req.params.movieId })
        .then(() => {
          res.send(Delete);
        }).catch(next);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadRequest());
      }
      return next(err);
    });
};
