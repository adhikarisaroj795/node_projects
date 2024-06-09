const jwt = require("jsonwebtoken");
const authModel = require("../models/authModel");
const ErrorHandler = require("../utils/errorHandler");

const isAuthenticated = async (req, res, next) => {
  let token = req.cookies.token;
  if (!token) {
    return next(new ErrorHandler("user is not authorized", 401));
  }
  if (token.startsWith("Bearer")) {
    token = token.split(" ")[1];
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await authModel.findById(decoded.id).select("--password");
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

//1:23:42
