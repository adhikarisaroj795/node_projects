const UserService = require("../service/user.service");
const ErrorHandler = require("../utils/error.handler");
class UserController {
  constructor() {
    this.usr_svc = new UserService();
  }

  register = async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      const user = await this.usr_svc.createUser(username, email, password);
      res.status(201).json({
        success: true,
        user,
        message: "User created sucessfully",
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  };
  login = async (req, res, next) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return next(new ErrorHandler("please enter email and password", 400));
      }
      const user = await this.usr_svc.login(username, password);
      if (!user) {
        return next(new ErrorHandler("user doesnot exist", 404));
      }
      const isPasswordMatched = await user.comparePassword(password);
      if (!isPasswordMatched) {
        return next(new ErrorHandler("invalid credentials", 401));
      }
      res.status(200).json({
        status: true,
        user: user,
        msg: "login sucessful",
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  setAvatar = async (req, res, next) => {
    try {
      const userId = req.params.id;
      const avatarImage = req.body.image;
      const userData = await this.usr_svc.userData(userId, avatarImage);
      console.log(userData);
      res.status(200).json({
        isSet: userData.isAvtarImageSet,
        image: userData.avatarImage,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UserController;
