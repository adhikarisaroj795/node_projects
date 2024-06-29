const bcryptjs = require("bcryptjs");
const userService = require("../services/user.service");
const ErrorHandler = require("../utils/error.handler");
class userController {
  constructor() {
    this.usr_svc = new userService();
  }

  updateUser = async (req, res, next) => {
    let userId = req.params.userId;
    const authenticatedUser = req.user._id.toString();
    if (userId.startsWith(":")) {
      userId = userId.substring(1);
    }
    if (userId !== authenticatedUser) {
      return next(
        new ErrorHandler("You are not allowded too make a change", 403)
      );
    }

    if (req.body.password) {
      if (req.body.password.length < 6) {
        return next(
          new ErrorHandler("password must be atleast of 6 characters")
        );
      }
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    if (req.body.username) {
      if (req.body.username.length < 7 || req.body.username.length > 20) {
        return next(
          new ErrorHandler("Username must be between 7 and 20 characters")
        );
      }
      if (req.body.username.includes(" ")) {
        return next(new ErrorHandler("Username cannot contain spaces"));
      }
      if (req.body.username !== req.body.username.toLowerCase()) {
        return next(new ErrorHandler("Username must be in lowercase"));
      }
      if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
        return next(
          new ErrorHandler("Username can only contain letters and numbers")
        );
      }
    }
    try {
      const updatedUser = await this.usr_svc.updateUser(userId, req);
      res.status(200).json({
        status: true,
        user: updatedUser,
        msg: "user updated successfully",
      });
    } catch (error) {
      next(error);
    }
  };

  deleteUser = async (req, res, next) => {
    let paramId = req.params.userId;

    if (paramId.startsWith(":")) {
      paramId = paramId.substring(1);
    }
    console.log(paramId);
    console.log(req.user.id);
    if (req.user.id !== paramId) {
      return next(
        new ErrorHandler("You are not allowded to delete the account", 404)
      );
    }
    try {
      const deletedUser = await this.usr_svc.deleteUser(req.params.userId);
      res.status(200).json({
        status: true,
        deletedUser: deletedUser,
        msg: "User Deleted Success",
      });
    } catch (error) {
      next(error);
    }
  };

  signOut = async (req, res, next) => {
    try {
      res.clearCookie("token").status(200).json("User has been signed out");
    } catch (error) {
      next(error);
    }
  };

  getAllUsers = async (req, res, next) => {
    if (!req.user.isAdmin) {
      return next(new ErrorHandler("Unauthorized"));
    }
    try {
      const { usersWithOutPAss, totalUser, lastMonthUsers } =
        await this.usr_svc.getUsers(req);
      res.status(200).json({
        status: true,
        users: usersWithOutPAss,
        msg: "User fetched Success",
        totalUser: totalUser,
        lastMonthUsers: lastMonthUsers,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = userController;
