const express = require("express");
const router = express.Router();
const userAuthController = require("../Controller/userAuthController");
const { isAuthenticated } = require("../Middleware/auth.middleware");
const usrAuth_ctrl = new userAuthController();

router.route("/register").post(usrAuth_ctrl.register);
router.route("/login").post(usrAuth_ctrl.login);
router.route("/logout").post(usrAuth_ctrl.logout);
router.route("/profile").get(isAuthenticated, usrAuth_ctrl.profile);

module.exports = router;
