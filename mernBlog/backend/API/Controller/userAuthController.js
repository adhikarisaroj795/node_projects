const UserAuthService = require("../Services/userAuth.service");
const ErrorHandler = require("../Utils/error.handler");
const sendToken = require("../Utils/jwToken");

class UserAuth {
  constructor() {
    this.usr_svc = new UserAuthService();
  }
  register = async (req, res, next) => {
    try {
      const { username, email, password } = req.body;

      if (!email || !password || !username) {
        throw new ErrorHandler("please insert email and password", 400);
      }
      const user = await this.usr_svc.registerNewUser(
        username,
        email,
        password
      );
      res.status(201).json({
        success: true,
        user,
        message: "User created Sucessfully",
      });
    } catch (error) {
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      const { token } = req.cookies;
      console.log(token);
      const { email, password } = req.body;

      if (!email || !password) {
        throw new ErrorHandler("please enter email or password", 400);
      }
      const user = await this.usr_svc.loginUSer(email, password);
      const message = "login success";

      sendToken(user, 200, res, message);
    } catch (error) {
      next(error);
    }
  };

  profile = async (req, res, next) => {
    try {
      const user = req.user;
      console.log(user);
      res.status(200).json({
        success: true,
        user: user,   
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  logout = (req, res, next) => {
    try {
      res
        .cookie("token", "", {
          expires: new Date(0), // Expire the cookie immediately
          httpOnly: true,
          sameSite: "None", // Ensure it matches the sameSite attribute used when setting the cookie
          secure: true, // Ensure it matches the secure attribute used when setting the cookie
        })
        .status(200)
        .json({ message: "Logged out successfully" });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UserAuth;
