const express = require("express");
const router = express.Router();
const UserController = require("../api/controllers/user.controller");
const usr_ctrl = new UserController();

router.route("/register").post(usr_ctrl.register);

module.exports = router;
