const UserService = require("../service/user.service");
const ErrorHandler = require("../utils/error.handler");
class UserController {
  constructor() {
    this.usr_svc = new UserService();
  }

  register = async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      const userExists = await this.usr_svc.isUserExists(username, email);
      if (userExists) {
        throw new ErrorHandler("User already exists", 409);
      }
      const user = await this.usr_svc.createUser(username, email, password);
      res.status(201).json({
        success: true,
        user,
        message: "User created sucessfully",
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UserController;
