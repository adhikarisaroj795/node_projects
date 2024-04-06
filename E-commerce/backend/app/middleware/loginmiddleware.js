const jwt = require("jsonwebtoken");
const userService = require("../services/user.services");
let user_svc = new userService();
const loginCheck = async (req, res, next) => {
  let token = null;
  if (req.headers["authorization"]) {
    token = req.headers.authorization;
  } else if (req.headers["x-xsrf-token"]) {
    token = req.headers["x-xsrf-token"];
  } else if (req.query["token"]) {
    token = req.query["token"];
  }
  if (!token) {
    next({
      status_code: 401,
      msg: "unauthorized access",
    });
  } else {
    token = token.split(" ");
    token = token[token.length - 1];

    if (!token) {
      next({
        status_code: 401,
        msg: "token not found",
      });
    } else {
      let data = jwt.verify(token, process.env.SECRET_KEY);
      if (!data || data == null) {
        next({
          status_code: 401,
          msg: "invalid data",
        });
      } else {
        try {
          let user = await user_svc.getUserById(data.id);
          if (user) {
            req.auth_user = user;
            next();
          } else {
            next({
              status_code: 401,
              msg: "token data",
            });
          }
        } catch (error) {
          next({
            status_code: 400,
            msg: error,
          });
        }
      }
    }
  }
};

module.exports = loginCheck;
