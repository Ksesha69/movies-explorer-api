class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.status = 403;
    this.message = 'Вы не можете удалить чужой фильм';
  }
}
module.exports = ForbiddenError;
