const express = require("express");
const router = express.Router();

const UserController = require("../app/controller/user.controller");
const user_ctrl = new UserController();

router.route("/login").post(user_ctrl.userLogin);

module.exports = router;
