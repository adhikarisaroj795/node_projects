const UserAuthService = require("../Services/userAuth.service");
class UserAuth {
  constructor() {
    this.usr_svc = new UserAuthService();
  }
  register = (req, res, next) => {
    console.log("hellppp");

    res.status(200).json({ msg: "helloworld" });
  };
}

module.exports = UserAuth;
