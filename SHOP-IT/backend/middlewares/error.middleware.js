const ErrorHandler = require("../utils/error.handler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === "DEVELOPMENT") {
    res.status(err.statusCode).json({
      sucess: false,
      error: err,
      errMessage: err.message,
      stack: err.stack,
    });
  } else if (process.env.NODE_ENV === "PRODUCTION") {
    let error = { ...err };
    if (error.name === "CastError") {
      error = new ErrorHandler(
        `Resources not found. Invalid ${error.path}`,
        404
      );
    }

    res.status(error.statusCode || 500).json({
      sucess: false,
      message: error.message || "Internal server Error",
    });
  }
};
