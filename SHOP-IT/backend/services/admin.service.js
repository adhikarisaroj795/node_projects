const userModel = require("../models/user.model");
const ErrorHandler = require("../utils/error.handler");

class AdminService {
  allUsers = async () => {
    const users = await userModel.find();
    return users;
  };
  getUserDetails = async (id) => {
    const user = await userModel.findById(id);
    return user;
  };

  UpdateUsersProfile = async (id, data, next) => {
    try {
      const user = await userModel.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
      return user;
    } catch (error) {
      console.log(error);
      next(new ErrorHandler("no user found", 404));
    }
  };

  deleteUser = async (id, next) => {
    try {
      const user = await userModel.findById(id);
      if (!user) {
        return next(new ErrorHandler("user does not exist", 404));
      }
      //Remove avtar todo
      return await user.remove();
    } catch (error) {
      next(new ErrorHandler("Error while delete", 500));
    }
  };
}
module.exports = AdminService;
