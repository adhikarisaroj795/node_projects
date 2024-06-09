const AuthService = require("../services/authService");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/sendToken");

class AuthController {
  static userRegistration = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
      const user = await AuthService.register(username, email, password);
      if (!username || username === "" || !email || email === "" || !password) {
        return next(new ErrorHandler("All fields are required", 400));
      }
      res.status(201).json({
        status: true,
        user: user,
        msg: "User Created Success",
      });
    } catch (error) {
      next(error);
    }
  };
  static userLogin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      if (!email || email === "" || !password || password === "") {
        return next(new ErrorHandler("Please Enter the Credentials"));
      }

      const user = await AuthService.login(email, password);
      // res.status(200).json({
      //   status: true,
      //   user: user,
      //   msg: "User LoggedIn Success",
      // });

      sendToken(user, 200, res, "User LoggedIn Success");
    } catch (error) {
      next(error);
    }
  };
}

module.exports = AuthController;
