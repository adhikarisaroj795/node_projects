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
}
module.exports = AuthService;
