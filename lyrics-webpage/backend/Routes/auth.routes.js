const express = require("express");
const router = express.Router();
const auth_ctrl = require("../controllers/auth.controller");

router.route("/sign-up").post(auth_ctrl.signUp);
router.route("/sign-in").post(auth_ctrl.login);

module.exports = router;