class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    if (this.statusCode >= 400 && this.statusCode) {
      this.stauts = "fail";
    } else {
      this.stauts = "error";
    }
  }
}
module.exports = AppError;
