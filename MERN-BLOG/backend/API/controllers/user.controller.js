const userService = require("../services/user.service");
class userController {
  constructor() {
    this.usr_svc = new userService();
  }

  updateUser = async (req, res, next) => {
    try {
      const { token } = req.cookies.access_token;
      console.log(token);

      console.log(req.user);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = userController;
