const errorMiddleware = (error, req, res, next) => {
  let status = error.status_code || 500;
  let msg = error.msg || error.message;

  res.status(status).json({
    result: null,
    msg: msg,
    status: false,
  });
};

module.exports = errorMiddleware;
