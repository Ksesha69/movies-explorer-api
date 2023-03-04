class NotFound extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
    this.message = 'Фильм или пользователь не найден';
  }
}
module.exports = NotFound;
