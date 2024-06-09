const authModel = require("../models/authModel");
const ErrorHandler = require("../utils/errorHandler");

class AuthService {
  static register = async (username, email, password) => {
    try {
      const existingEmail = await authModel.findOne({ email: email });
      if (existingEmail) {
        throw new ErrorHandler("Email already Exist", 409);
      }
      const newUser = new authModel({
        username,
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
      const isEmailExist = await authModel.findOne({ email: email });
      if (!isEmailExist) {
        throw new ErrorHandler("Invalid credentials", 401);
      }

      const isPasswordMatched = await isEmailExist.comparePassword(password);
      if (!isPasswordMatched) {
        throw new ErrorHandler("Invalid Credentials", 401);
      }
      return isEmailExist;
    } catch (error) {
      throw error;
    }
  };
}
module.exports = AuthService;
