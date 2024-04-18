const userModel = require("../models/user.model");

const ErrorHandler = require("../utils/error.handler");
const crypto = require("crypto");
class UserService {
  registerUser = async (name, email, password) => {
    try {
      const user = await userModel.create({
        name,
        email,
        password,
        avtar: {
          public_id: "avatars/ksdgdgdgdsgsdvk",
          url: "https://res.cloudinary.com/shopit/image/uploads/avatars/ksdgdgdgdsgsdvk",
        },
      });

      return user;
    } catch (error) {
      console.log(error.message);
    }
  };
  loginUser = async (email, password) => {
    try {
      const user = await userModel
        .findOne({ email: email })
        .select("+password");

      return user;
    } catch (error) {
      console.log("error from login");
    }
  };
  resetPassword = async (token, next) => {
    try {
      const resetPasswordToken = crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");

      const user = await userModel.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
      });

      if (!user) {
        return next(
          new ErrorHandler(
            "password reset token is invalid or has been expired",
            400
          )
        );
      }
      return user;
    } catch (error) {
      next(new ErrorHandler("error in reset", 500));
    }
  };
  upDatePassword = async (req, next) => {
    try {
      const user = await userModel.findById(req.user.id).select("+password");

      //check prev password
      const isMatched = await user.comparePassword(req.body.oldpassword);
      if (!isMatched) {
        return next(new ErrorHandler("old password is incorrect", 400));
      }
      user.password = req.body.password;
      return await user.save();
    } catch (error) {
      console.log(error);
    }
  };
  updateProfile = async (req, next, data) => {
    try {
      const user = await userModel.findByIdAndUpdate(req.user.id, data, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
      return user;
    } catch (error) {
      next(new ErrorHandler("eror in update profile", 500));
    }
  };
}
module.exports = UserService;
