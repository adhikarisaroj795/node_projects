const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const ErrorHandler = require("../utils/error.handler");

const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Login First to access this", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);
    if (!user) {
      return next(new ErrorHandler("User not found", 404));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid token", 401));
  }
};
module.exports = { isAuthenticated };
