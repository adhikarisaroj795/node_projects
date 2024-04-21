const UserService = require("../service/user.service");
class UserController {
  constructor() {
    this.usr_svc = new UserService();
  }

  register = (req, res, next) => {
    console.log("hello");
  };
}

module.exports = UserController;
