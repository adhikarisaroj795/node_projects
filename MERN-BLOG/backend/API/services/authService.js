const userModel = require("../models/user.model");
const ErrorHandler = require("../utils/error.handler");
const sendToken = require("../utils/jwToken");
const bcryptjs = require("bcryptjs");

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
        throw new ErrorHandler("Invalid credentials", 404);
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
  GoogleService = async (email, name, googlePhotoUrl, res) => {
    try {
      const user = await userModel.findOne({ email: email });
      console.log(email);
      if (user) {
        const message = "Logged in Success";
        sendToken(user, 200, res, message);
      } else {
        const generatedPassword =
          Math.random().toString(36).slice(-8) +
          Math.random().toString(36).slice(-8);
        const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
        const newUser = new userModel({
          username:
            name.toLowerCase().replace(/\s+/g, "").substring(0, 15) +
            Math.random().toString(9).slice(-4),
          email: email,
          password: hashedPassword,
          profilePicture: googlePhotoUrl,
        });
        console.log("service", newUser);
        await newUser.save();
        return newUser;
      }
    } catch (error) {
      throw error;
    }
  };
}
module.exports = AuthService;
