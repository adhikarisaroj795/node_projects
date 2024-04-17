const jwt = require("jsonwebtoken");

const ErrorHandler = require("../utils/error.handler");
const catchAsyncErrors = require("./catchAsyncErrors");
const userModel = require("../models/user.model");

//checks if user is authenticated or not
const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("login first to access this", 401));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await userModel.findById(decoded.id);

  next();
});

//handling user roles
const authRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(`Role (${req.user.role}) is not allowded`, 403)
      );
    }
    next();
  };
};

module.exports = { isAuthenticated, authRoles };
