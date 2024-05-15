const userModel = require("../model/user.model");

class RegisterService {
  registerUser = async (username, email, password, confirmpassword) => {
    try {
      if (password === confirmpassword) {
        const existingEmail = await userModel.findOne({ email });
        if (existingEmail) {
          const error = new Error("Email already exists");
          error.statusCode = 409;
          throw error;
        }

        const newUser = await userModel.create({
          email,
          username,
          password,
        });
        return newUser;
      } else {
        const error = new Error("Password and Confirm password must be same");
        error.statusCode = 404;
        throw error;
      }
    } catch (error) {
      throw error;
    }
  };

  loginUser = async (email, password) => {
    try {
      const user = await userModel.findOne({ email: email });
      if (!user) {
        const error = new Error("No user Exists!");
        error.statusCode = 404;
        throw error;
      }
      const isPasswordMatched = await user.comparePassword(password);
      if (!isPasswordMatched) {
        const error = new Error("Invalid credentials");
        error.statusCode = 401;
        throw error;
      }
      return user;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = RegisterService;
