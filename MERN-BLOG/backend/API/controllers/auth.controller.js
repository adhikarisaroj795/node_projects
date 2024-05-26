const AuthService = require("../services/authService");
class AuthController {
  constructor() {
    this.auth_svc = new AuthService();
  }
  signUp = async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      if (
        !username ||
        !email ||
        !password ||
        username === "" ||
        email === "" ||
        password === ""
      ) {
        return res.status(400).json({
          status: false,
          message: "All field are required",
        });
      }

      const newUser = await this.auth_svc.SignUp(username, email, password);

      res.status(201).json({
        status: "true",
        user: newUser,
        msg: "user created success",
      });
    } catch (error) {}
  };
}

module.exports = AuthController;
