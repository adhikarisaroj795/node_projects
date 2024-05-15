const express = require("express");
const RegisterController = require("../controller/register.controller");
const usr_ctrl = new RegisterController();

const router = express.Router();

router.route("/register").post(usr_ctrl.register).get();
router.route("/login").post(usr_ctrl.login);

module.exports = router;
