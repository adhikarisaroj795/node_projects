const userModel = require("../model/user.model");

class UserService {
  // isUserExists = async (username, email) => {
  //   try {
  //     const userCheck = await userModel.findOne({ username });
  //     if (userCheck) {
  //       throw new Error("User already exists");
  //     }

  //     const emailCheck = await userModel.findOne({ email });
  //     if (emailCheck) {
  //       throw new Error("Email already exists");
  //     }

  //     return false; // User does not exist
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // };

  createUser = async (username, email, password) => {
    try {
      const existingEmail = await userModel.findOne({ email });
      if (existingEmail) {
        const error = new Error("email already exists");
        error.statusCode = 409;
        throw error;
      }
      const existingUser = await userModel.findOne({ username });
      if (existingUser) {
        const error = new Error("User already exists");
        error.statusCode = 409;
        throw error;
      }
      const newUser = await userModel.create({
        email,
        username,
        password,
      });

      return newUser;
    } catch (error) {
      throw error;
    }
  };
  login = async (username, password, next) => {
    try {
      const user = await userModel.findOne({ username: username });

      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getUsers = async (id) => {
    try {
      const users = await userModel
        .find({ _id: { $ne: id } })
        .select(["email", "username", "avtarImage", "_id"]);
      if (!users) {
        const error = new Error("no user found");
        error.statusCode = 404;
        throw error;
      }
      return users;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = UserService;
