const router = require('express').Router();

const routerAuth = require('./auth');
const routerUser = require('./users');
const routerMovie = require('./movies');
const auth = require('../middlewares/auth');
const { NotFound } = require('../errors/notFound');

router.use('/', routerAuth);
router.use('/users', auth, routerUser);
router.use('/movies', auth, routerMovie);
router.all('/*', auth, () => {
  throw new NotFound();
});

module.exports = router;
