const express = require("express");

const router = express.Router();
const AuthController = require("../controllers/auth.controller");
const auth_ctrl = new AuthController();

router.route("/sign-up").post(auth_ctrl.signUp);
router.route("/sign-in").post(auth_ctrl.signIn);
router.route("/auth/google").post(auth_ctrl.google);

module.exports = router;
