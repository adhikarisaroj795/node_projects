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

    error.message = err.message;
    //* Wrong mongoose object id error
    if (err.name === "CastError") {
      const message = `Resources not found invalid: ${err.path}`;
      error = new ErrorHandler(message, 400);
    }
    //* Handling mongoose validation error
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((value) => value.message);
      error = new ErrorHandler(message, 400);
    }

    res.status(error.statusCode || 500).json({
      sucess: false,
      message: error.message || "Internal server Error",
    });
  }
};
