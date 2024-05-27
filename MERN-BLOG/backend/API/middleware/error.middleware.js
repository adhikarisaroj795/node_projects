module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  console.log("hello", err);

  if (process.env.NODE_ENV === "DEVELOPMENT") {
    // Handle errors in development environment
    res.status(err.statusCode).json({
      success: false,
      error: err,
      errorMessage: err.message,
      stackTrace: err.stack,
    });
  } else if (process.env.NODE_ENV === "PRODUCTION") {
    // Handle errors in production environment
    let errorToSend = { ...err };

    // Handling specific error types
    if (err.name === "CastError") {
      errorToSend.message = `Resource not found: Invalid ${err.path}`;
      // Directly modify the errorToSend object
      errorToSend.statusCode = 400;
    } else if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((value) => value.message);
      errorToSend.message = messages;
      // Directly modify the errorToSend object
      errorToSend.statusCode = 400;
    } else if (err.code === 11000) {
      const field = Object.keys(err.keyValue)[0];
      const value = err.keyValue[field];
      errorToSend.message = `Duplicate field value: ${value}. Please use another value.`;
      // Directly modify the errorToSend object
      errorToSend.statusCode = 400;
    } else if (err.name === "JsonWebTokenError") {
      errorToSend.message =
        "Invalid JSON Web Token. Please provide a valid token.";
      // Directly modify the errorToSend object
      errorToSend.statusCode = 400;
    } else if (err.name === "TokenExpiredError") {
      errorToSend.message = "JSON Web Token has expired. Please log in again.";
      // Directly modify the errorToSend object
      errorToSend.statusCode = 400;
    }

    // Sending error response
    res.status(errorToSend.statusCode).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
};
