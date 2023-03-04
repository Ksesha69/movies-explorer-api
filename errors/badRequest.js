class BadRequest extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
    this.message = 'Переданы некорректные данные в методы создания фильма, пользователя, обновления профиля';
  }
}
module.exports = BadRequest;
