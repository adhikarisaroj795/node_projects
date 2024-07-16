const userModel = require("../models/user.model");
const ErrorHandler = require("../utils/ErrorHandler");

class AuthService {
  static signUp = async (fullname, email, password) => {
    try {
      const isEmailExist = await userModel.findOne({ email: email });
      if (isEmailExist) {
        throw new ErrorHandler("Email already Exist", 409);
      }

      const newUser = new userModel({
        fullname,
        email,
        password,
      });
      await newUser.save();
      return newUser;
    } catch (error) {
      throw error;
    }
  };

  static login = async (email, password) => {
    try {
      const IsUserExist = await userModel.findOne({ email: email });
      if (!IsUserExist) {
        throw new ErrorHandler("Invalid Credentials", 400);
      }

      const isPasswordMAtched = await IsUserExist.comparePassword(password);
      if (!isPasswordMAtched) {
        throw new ErrorHandler("Invalid Credentials", 401);
      }
      return IsUserExist;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = AuthService;
