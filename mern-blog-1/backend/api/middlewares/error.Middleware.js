module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === "DEVELOPMENT") {
    res.status(err.statusCode).json({
      status: false,
      error: err,
      errMsg: err.message,
      stackTrace: err.stack,
    });
  } else if ((process.env.NODE_ENV = "PRODUCTION")) {
    let errorToSend = { ...err };
    res.status(errorToSend.statusCode).json({
      status: false,
      message: errorToSend.message || "Internal server error",
    });
  }
};
 