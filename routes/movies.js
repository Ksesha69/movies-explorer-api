const routerMovie = require('express').Router();

const { validatorCreateMovie, validatorMovieId } = require('../utils/validator');
const { createMovie, getMovies, deleteMovie } = require('../controllers/movies');

routerMovie.get('/', getMovies);
routerMovie.post('/', validatorCreateMovie, createMovie);
routerMovie.delete('/:movieId', validatorMovieId, deleteMovie);

module.exports = routerMovie;
