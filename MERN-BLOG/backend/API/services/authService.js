const userModel = require("../models/user.model");
const ErrorHandler = require("../utils/error.handler");

class AuthService {
  SignUp = async (username, email, password) => {
    try {
      const existingEmail = await userModel.findOne({ email: email });
      if (existingEmail) {
        throw new ErrorHandler("Email already Exist", 409);
      }

      const newUser = new userModel({
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
  SignIn = async (email, password) => {
    try {
      const ExistingUser = await userModel.findOne({
        email: email,
      });
      if (!ExistingUser) {
        throw new ErrorHandler("No username found", 404);
      }

      const isPasswordMatched = await ExistingUser.comparePassword(password);
      if (!isPasswordMatched) {
        throw new ErrorHandler("Invalid credentials", 401);
      }
      return ExistingUser;
    } catch (error) {
      throw error;
    }
  };
}
module.exports = AuthService;
