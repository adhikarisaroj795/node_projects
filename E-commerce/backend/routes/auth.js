const express = require("express");
const router = express.Router();

const UserController = require("../app/controller/user.controller");
const user_ctrl = new UserController();
const loginCheck = require("../app/middleware/loginmiddleware");

router.route("/login").post(loginCheck, user_ctrl.userLogin);

module.exports = router;
