const auth_svc = require("../services/auth.service");
const ErrorHandler = require("../utils/ErrorHandler");
const sendToken = require("../utils/jwtToken");
class AuthController {
  static signUp = async (req, res, next) => {
    try {
      const { fullname, email, password } = req.body;
      if (
        !fullname ||
        fullname === "" ||
        !email ||
        email === "" ||
        !password ||
        password === ""
      ) {
        return next(new ErrorHandler("All fields are required", 400));
      }
      const newUser = await auth_svc.signUp(fullname, email, password);
      res.status(201).json({
        status: true,
        user: newUser,
        msg: "User Created Success",
      });
    } catch (error) {
      next(error);
    }
  };

  static login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || email === "" || !password || password === "") {
      return next(new ErrorHandler("All field are required", 400));
    }
    try {
      const user = await auth_svc.login(email, password);
      const message = "User Logged in success";

      sendToken(user, 200, res, message);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = AuthController;
