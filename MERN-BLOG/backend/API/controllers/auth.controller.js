const AuthService = require("../services/authService");
const ErrorHandler = require("../utils/error.handler");
class AuthController {
  constructor() {
    this.auth_svc = new AuthService();
  }
  signUp = async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      if (
        !username ||
        !email ||
        !password ||
        username === "" ||
        email === "" ||
        password === ""
      ) {
        return next(new ErrorHandler("All fieldsrequired", 400));
        // throw new ErrorHandler("All fieldsrequired", 400);
      }

      const newUser = await this.auth_svc.SignUp(username, email, password);

      res.status(201).json({
        status: "true",
        user: newUser,
        msg: "user created success",
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = AuthController;
