const RegisterService = require("../services/register.service");
const ErrorHandler = require("../utils/error.handler");
const sendToken = require("../utils/jwToken");
class RegisterController {
  constructor() {
    this.reg_svc = new RegisterService();
  }

  register = async (req, res, next) => {
    try {
      const { username, email, password, confirmpassword } = req.body;
      const user = await this.reg_svc.registerUser(
        username,
        email,
        password,
        confirmpassword
      );
      const message = "register sucessfull";

      sendToken(user, 200, res, message);
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return next(new ErrorHandler("please enter email and password", 400));
      }
      const user = await this.reg_svc.loginUser(email, password);
      const message = "login sucessfull";
      sendToken(user, 200, res, message);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = RegisterController;
