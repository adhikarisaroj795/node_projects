module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === "DEVELOPMENT") {
    res.status(err.statusCode).json({
      status: false,
      error: err,
      errorMessage: err.message,
      stackTrace: err.stack,
    });
  } else if (process.env.NODE_ENV === "PRODUCTION") {
    let errorToSend = { ...err };

    if (err.name === "CastError") {
      errorToSend.message = `Resource not found: Invalid ${err.path}`;
      errorToSend.statusCode = 400;
    } else if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((value) => value.message);
      errorToSend.message = message;
      errorToSend.statusCode = 400;
    } else if (err.code === 11000) {
      const field = Object.keys(err.keyValue)[0];
      const value = err.keyValue[field];
      errorToSend.statusCode = 400;
      errorToSend.message = `Duplicate field value: ${value}. please use another value.`;
    } else if (err.name === "JsonWebTokenError") {
      errorToSend.message = `Invalid JSON web Token. Please provide valid token`;
      errorToSend.statusCode = 400;
    } else if (err.name === "TokenExpiredError") {
      errorToSend.message =
        "JSON Web Token has expired. Please enter valid token";
      errorToSend.statusCode = 400;
    }

    res.status(errorToSend.statusCode).json({
      status: false,
      message: err.message || "Internal Server Error",
    });
  }
};
