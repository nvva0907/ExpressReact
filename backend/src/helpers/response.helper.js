function successRes(res, data = null, code = "SUCCESS", message = "Success") {
  res.status(200).json({
    status: 200,
    code,
    message,
    data,
  });
}

class AppException extends Error {
  constructor(
    code = "ERROR",
    message = "Error",
    status = 400,
    data = null,
  ) {
    super(message);
    this.code = code;
    this.status = status;
    this.data = data;
  }
}
export { successRes, AppException };
