const ErrorHandler = require("../Utils/error.handler");

module.exports = (err, req, res, next) => {
  // Default error details
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  if (process.env.NODE_ENV === "DEVELOPMENT") {
    // Detailed error information in development
    return res.status(err.statusCode).json({
      success: false,
      error: err,
      errorMessage: err.message,
      stackTrace: err.stack,
    });
  }

  if (process.env.NODE_ENV === "PRODUCTION") {
    let errorToSend = { ...err };

    // Handle specific error types
    switch (err.name) {
      case "CastError":
        errorToSend = new ErrorHandler(
          `Resource not found: Invalid ${err.path}`,
          400
        );
        break;
      case "ValidationError":
        const messages = Object.values(err.errors).map(
          (value) => value.message
        );
        errorToSend = new ErrorHandler(messages.join(". "), 400);
        break;
      case "JsonWebTokenError":
        errorToSend = new ErrorHandler(
          "Invalid JSON Web Token. Please provide a valid token.",
          400
        );
        break;
      case "TokenExpiredError":
        errorToSend = new ErrorHandler(
          "JSON Web Token has expired. Please log in again.",
          400
        );
        break;
      default:
        if (err.code === 11000) {
          const field = Object.keys(err.keyValue)[0];
          const value = err.keyValue[field];
          errorToSend = new ErrorHandler(
            `Duplicate field value: ${value}. Please use another value.`,
            400
          );
        } else {
          errorToSend = new ErrorHandler(err.message, err.statusCode);
        }
        break;
    }

    // Send sanitized error response
    return res.status(errorToSend.statusCode).json({
      success: false,
      message: errorToSend.message || "Internal Server Error",
    });
  }

  // Fallback for environments other than development or production
  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
