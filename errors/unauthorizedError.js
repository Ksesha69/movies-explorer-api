class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.status = 401;
    this.message = 'Неправильные почта или пароль';
  }
}
module.exports = UnauthorizedError;
