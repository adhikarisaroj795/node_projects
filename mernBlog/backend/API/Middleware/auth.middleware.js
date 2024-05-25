const jwt = require("jsonwebtoken");
const userModel = require("../Models/user.model");
const ErrorHandler = require("../Utils/error.handler");

const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  console.log("token", token);
  if (!token) {
    return next(new ErrorHandler("Login first to access this", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);
    if (!user) {
      return next(new ErrorHandler("User not found", 404));
    }

    req.user = user;
    console.log(req.user);

    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid token", 401));
  }
};

module.exports = { isAuthenticated };
