const UserService = require("../services/user.services");
class UserController {
  user_svc;
  constructor() {
    this.user_svc = new UserService();
  }
  useRegister = (req, res, next) => {
    let data = req.body;
    let error_msgs = this.user_svc.validateRegister(data);

    if (req.file) {
      data["image"] = req.file.filename;
    }
    if (Object.keys(error_msgs).length !== 0) {
      next({
        status_code: 400,
        msg: error_msgs,
      });
    } else {
      res.json({
        result: {
          body: data,
        },
        status: true,
        msg: "user Created",
      });
    }
  };
  listAllUsers = (req, res, next) => {
    res.json({
      result: "user list",
      status: true,
      msg: "user fetched",
    });
  };
}

module.exports = UserController;
