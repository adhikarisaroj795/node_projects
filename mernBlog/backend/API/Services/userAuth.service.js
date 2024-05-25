const userModel = require("../Models/user.model");
const ErrorHandler = require("../Utils/error.handler");

class UserAuthService {
  registerNewUser = async (username, email, password) => {
    try {
      const existingEmail = await userModel.findOne({ email });
      if (existingEmail) {
        throw new ErrorHandler("Email already exists", 409);
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

  loginUSer = async (email, password) => {
    try {
      const user = await userModel.findOne({
        email: email,
      });
      if (!user) {
        throw new ErrorHandler("No email address found", 404);
      }
      const isPasswordMatched = await user.comparePassword(password);
      if (!isPasswordMatched) {
        throw new ErrorHandler("Invalid Credentials", 401);
      }

      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}

module.exports = UserAuthService;
