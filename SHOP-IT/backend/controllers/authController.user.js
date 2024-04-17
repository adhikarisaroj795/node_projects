const ErrorHandler = require("../utils/error.handler.js");
const catchAsyncError = require("../middlewares/catchAsyncErrors.js");
const UserService = require("../services/user.service.js");
const sendToken = require("../utils/jwtToken.js");
const sendEmail = require("../utils/sendMail");
const userModel = require("../models/user.model.js");

class UserController {
  constructor() {
    this.usr_svc = new UserService();
  }
  registerUser = catchAsyncError(async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      const user = await this.usr_svc.registerUser(name, email, password);

      //saving token in cookie
      sendToken(user, 200, res);
    } catch (error) {
      next(error);
    }
  });

  loginUSer = async (req, res, next) => {
    try {
      const { email, password } = req.body;

      //checks if email and password is enterd by user
      if (!email || !password) {
        return next(new ErrorHandler("please enter email & password", 400));
      }
      const user = await this.usr_svc.loginUser(email, password);

      if (!user) {
        return next(new ErrorHandler("email doesnot exit", 404));
      }
      const isPasswordMatched = await user.comparePassword(password);
      if (!isPasswordMatched) {
        return next(new ErrorHandler("invalid credentials", 401));
      }
      sendToken(user, 200, res);
    } catch (error) {
      next(error);
    }
  };

  //forget Password => /api/v1/forget
  forgetPassword = catchAsyncError(async (req, res, next) => {
    const user = await userModel.findOne({ email: req.body.email });

    if (!user) {
      return next(new ErrorHandler("invalid credentials", 404));
    }
    //get ResetToken
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });
    //create reset password utl
    const resetUrl = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/password/reset/${resetToken}`;
    const message = `Your password reset token is as follow:\n\n${resetUrl}\n\nIf yoy have not
    requested this email, then ignore it`;
    try {
      await sendEmail({
        email: user.email,
        subject: "ShopIt Password Recovery",
        message,
      });
      res.status(200).json({
        sucess: true,
        message: `Email sent to :${user.email}`,
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save({ validateBeforeSave: false });
      return next(new ErrorHandler(error.message, 500));
    }
  });

  //reset Password => /api/v1/reset/:token
  resetPassword = catchAsyncError(async (req, res, next) => {
    //hash URL token
    const user = await this.usr_svc.resetPassword(req.params.token, next);

    if (req.body.password !== req.body.confirmPassword) {
      return next(new ErrorHandler("password does  not match", 400));
    }
    //setup new password
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    sendToken(user, 200, res);
  });

  //logout user => /api/v1/logout
  logOut = catchAsyncError(async (req, res, next) => {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
    });
    res.status(200).json({
      sucess: true,
      message: "logged out",
    });
  });
}

module.exports = UserController;
