const userModel = require("../model/user.model");

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
      let user = new userModel(data);
      return await user.save();
    } catch (error) {
      throw error;
    }
  };
}

module.exports = userService;
