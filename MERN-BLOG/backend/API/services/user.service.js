const userModel = require("../models/user.model");

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
}

module.exports = userService;
