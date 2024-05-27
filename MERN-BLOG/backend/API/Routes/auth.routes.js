const express = require("express");

const router = express.Router();
const AuthController = require("../controllers/auth.controller");
const auth_ctrl = new AuthController();

router.route("/sign-up").post(auth_ctrl.signUp);

module.exports = router;
