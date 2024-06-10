const jwt = require("jsonwebtoken");
const authModel = require("../models/authModel");
const ErrorHandler = require("../utils/errorHandler");

const isAuthenticated = async (req, res, next) => {
  let token =
    req.headers["authorization"] || req.cookies["token"] || req.query.token;

  console.log("Token:", token);
  console.log("Type of token:", typeof token);

  if (!token) {
    return next(new ErrorHandler("User is not authorized", 401));
  }

  // Directly use the token if it's not in "Bearer" format
  if (token.startsWith("Bearer ")) {
    token = token.split(" ")[1];
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await authModel.findById(decoded.userId).select("-password"); // assuming userId is used for fetching user
    if (!user) {
      return next(new ErrorHandler("User not found", 404));
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return next(new ErrorHandler("Invalid token", 401));
  }
};

module.exports = { isAuthenticated };
