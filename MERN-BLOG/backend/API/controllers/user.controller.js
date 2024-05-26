const userService = require("../services/user.service");
class userController {
  constructor() {
    this.usr_svc = new userService();
  }

  signUp = (req, res, next) => {};
  register = (req, res, next) => {
    console.log("hello from register");
    res.json("test passed");
  };
}

module.exports = userController;
