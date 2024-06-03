const AuthService = require("../services/authService");
const ErrorHandler = require("../utils/error.handler");
const sendToken = require("../utils/jwToken");
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

  signIn = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password || email === "" || password === "") {
      return next(new ErrorHandler("All field are required", 400));
    }
    try {
      const user = await this.auth_svc.SignIn(email, password);

      const message = "User LoggedIn success";
      sendToken(user, 200, res, message);
    } catch (error) {
      next(error);
    }
  };
  google = async (req, res, next) => {
    const { email, name, googlePhotoUrl } = req.body;

    try {
      const user = await this.auth_svc.GoogleService(
        email,
        name,
        googlePhotoUrl,
        res
      );
      const message = "user created";
      sendToken(user, 201, res, message);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = AuthController;
