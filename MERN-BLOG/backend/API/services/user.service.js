const userModel = require("../models/user.model");
const ErrorHandler = require("../utils/error.handler");

class userService {
  updateUser = async (id, req) => {
    try {
      const updatedUser = await userModel.findByIdAndUpdate(
        id,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            profilePicture: req.body.profilePicture,
            password: req.body.password,
          },
        },
        { new: true }
      );

      // Destructure the password out of the updatedUser document
      const { password: pwd, ...rest } = updatedUser._doc;

      return rest;
    } catch (error) {
      throw error;
    }
  };

  deleteUser = async (id) => {
    try {
      const deletedUser = await userModel.findByIdAndDelete(id);
      return deletedUser;
    } catch (error) {
      throw error;
    }
  };

  getUsers = async (req) => {
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.sort === "asc" ? 1 : -1;

      const allUsers = await userModel
        .find()
        .sort({ createdAt: sortDirection })
        .skip(startIndex)
        .limit(limit);

      const usersWithOutPAss = allUsers.map((user) => {
        const { password, ...rest } = user._doc;
        return rest;
      });

      const totalUser = await userModel.countDocuments();

      const now = new Date();
      const oneMonthAgo = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate()
      );

      const lastMonthUsers = await userModel.countDocuments({
        createdAt: { $gte: oneMonthAgo },
      });

      return { usersWithOutPAss, totalUser, lastMonthUsers };
    } catch (error) {
      throw error;
    }
  };

  getUser = async (id) => {
    try {
      const user = await userModel.findById(id);
      if (!user) {
        return new ErrorHandler("User not found", 404);
      }
      const { password, ...rest } = user._doc;
      return rest;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = userService;
