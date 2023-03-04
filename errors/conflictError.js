class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.status = 409;
    this.message = 'Данный email уже используется';
  }
}
module.exports = ConflictError;
