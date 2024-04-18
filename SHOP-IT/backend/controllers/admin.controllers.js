const AdminService = require("../services/admin.service");
const catchAsyncError = require("../middlewares/catchAsyncErrors.js");
const ErrorHandler = require("../utils/error.handler.js");

class AdminController {
  constructor() {
    this.admn_svc = new AdminService();
  }

  allUsers = catchAsyncError(async (req, res, next) => {
    const user = await this.admn_svc.allUsers();
    if (!user) {
      next(new ErrorHandler("no user found", 404));
    }
    res.status(200).json({
      userCount: user.length,
      success: true,
      users: user,
    });
  });

  getUserByid = catchAsyncError(async (req, res, next) => {
    const user = await this.admn_svc.getUserDetails(req.params.id);
    if (!user) {
      next(new ErrorHandler("id not matched", 404));
    }
    res.status(200).json({
      status: true,
      user: user,
    });
  });

  updateUser = catchAsyncError(async (req, res, next) => {
    const newUserData = {
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
    };
    console.log(newUserData);
    if (!newUserData.name) {
      next(new ErrorHandler("plese enter detail to update", 500));
    }
    const user = await this.admn_svc.UpdateUsersProfile(
      req.params.id,
      newUserData
    );

    res.status(200).json({
      success: true,
      user: user,
    });
  });

  deleteUser = catchAsyncError(async (req, res, next) => {
    const id = req.params.id;
    const user = await this.admn_svc.deleteUser(id, next);

    res.status(200).json({
      sucess: true,
      user: user,
      msg: "user deleted sucessfully",
    });
  });
}
module.exports = AdminController;
