const userModel = require("../model/user.model");

class AuthService {
  login = async (username, password) => {
    try {
      let user = await userModel.findOne({ email: username });

      if (user && user.password === password) {
        return user; // Return the user object if login is successful
      } else {
        throw new Error("Incorrect email or password");
      }
    } catch (error) {
      throw new Error("Login failed: " + error.message);
    }
  };
}

module.exports = AuthService;
