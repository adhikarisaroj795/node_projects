const userModel = require("../models/user.model");

class AuthService {
  SignUp = async (username, email, password) => {
    try {
      const isEmailMatched = await userModel.findOne({ email: email });

      const newUser = new userModel({
        username,
        email,
        password,
      });
      await newUser.save();
      return newUser;
    } catch (error) {
      throw error;
    }
  };
}
module.exports = AuthService;
