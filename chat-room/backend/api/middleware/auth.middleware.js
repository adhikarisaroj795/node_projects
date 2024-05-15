const jwt = require("jsonwebtoken");

const ErrorHandler = require("../utils/error.handler");
const userModel = require("../model/user.model");

//checks if user is authenticated or not
const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return next(new ErrorHandler("user not authenticated", 401));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await userModel.findById(decoded.id);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = isAuthenticated;
