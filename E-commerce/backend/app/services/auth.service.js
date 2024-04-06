const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthService {
  generateJWTToken = (payload) => {
    let token = jwt.sign(payload, process.env.SECRET_KEY);
    console.log(process.env.SECRET_KEY);
    return token;
  };
  login = async (username, password) => {
    try {
      let user = await userModel.findOne({ email: username });

      if (!user) {
        throw { status: 400, msg: "user doesnot exit" };
      } else {
      }
      if (bcrypt.compareSync(password, user.password)) {
        //token
        let response = {
          user: user,
          token: this.generateJWTToken({
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          }),
        };
        console.log(response);
        return response; // Return the user object if login is successful
      } else {
        throw new Error("Incorrect email or password");
      }
    } catch (error) {
      throw new Error("Login failed: " + error.message);
    }
  };
}

module.exports = AuthService;
