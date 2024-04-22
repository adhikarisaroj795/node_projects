const userModel = require("../model/user.model");

class UserService {
  isUserExists = async (username, email) => {
    try {
      const userCheck = await userModel.findOne({ username });
      if (userCheck) {
        throw new Error("User already exists");
      }

      const emailCheck = await userModel.findOne({ email });
      if (emailCheck) {
        throw new Error("Email already exists");
      }

      return false; // User does not exist
    } catch (error) {
      throw error;
    }
  };

  createUser = async (username, email, password) => {
    try {
      const user = await userModel.create({
        email,
        username,
        password,
      });
      return user;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = UserService;
