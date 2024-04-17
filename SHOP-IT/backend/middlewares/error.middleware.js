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

    // Handling mongoose dublicate errot
    if (err.code === 11000) {
      const message = `Duplicate ${Object.keys(err.keyvalue)} entered`;
      error = new ErrorHandler(message, 400);
    }

    // Handling wrong JWT error
    if (err.name === "JsonWebTokenError") {
      const message = "json web token is invalid, try again";
      error = new ErrorHandler(message, 400);
    }
    //handle expire token
    if (err.name === "TokenExpiredError") {
      const message = "json web token is expired, try again";
      error = new ErrorHandler(message, 400);
    }

    res.status(error.statusCode || 500).json({
      sucess: false,
      message: error.message || "Internal server Error",
    });
  }
};
