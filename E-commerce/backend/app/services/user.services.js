const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");

class userService {
  validateRegister = (data) => {
    let error_msgs = {};
    if (!data.name) {
      error_msgs.name = "Name is required";
    }
    if (!data.email) {
      error_msgs.email = "Email is required";
    }
    if (!data.password) {
      error_msgs.password = "password is required";
    }
    if (!data.role) {
      error_msgs.role = "role is required";
    }
    return error_msgs;
  };

  userRegister = async (data) => {
    try {
      data["password"] = bcrypt.hashSync(data["password"], 10);
      let user = new userModel(data);
      return await user.save();
    } catch (error) {
      throw error;
    }
  };

  getUserById = async (user_id) => {
    try {
      return await userModel.findById(user_id);
    } catch (error) {
      throw error;
    }
  };
}

module.exports = userService;
