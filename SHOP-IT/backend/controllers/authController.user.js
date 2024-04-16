const userModel = require("../models/user.model");
const ErrorHandler = require("../utils/error.handler.js");
const catchAsyncError = require("../middlewares/catchAsyncErrors.js");
const UserService = require("../services/user.service.js");

class UserController {
  constructor() {
    this.prod_svc = new UserService();
  }
  registerUser = catchAsyncError(async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      const user = await this.prod_svc.registerUser(name, email, password);

      console.log("user", user);
      res.status(201).json({
        sucess: true,
        result: user,
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = UserController;
