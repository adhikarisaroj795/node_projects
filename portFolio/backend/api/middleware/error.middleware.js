const ErrorHandler = require("../utils/error.handler");

const errorMiddleware = (err, req, res, next) => {
  console.log("hello");
  err.statusCode = err.statusCode || 500;
  if (process.env.NODE_ENV === "DEVELOPMENT") {
    res.status(err.statusCode).json({
      success: false,
      error: {
        name: err.name,
        message: err.message,
        stack: err.stack,
      },
    });
    return;
  }

  if (process.env.NODE_ENV === "PRODUCTION") {
    let error = { ...err };
    error.message = err.message;
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((error) => error.message);
      error = new ErrorHandler(message.join(","), 400);
    }

    if (err.name === "CastError") {
      const message = "Resources not found";
      error = new ErrorHandler(message, 404);
    }
    res.status(error.statusCode).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

module.exports = errorMiddleware;
