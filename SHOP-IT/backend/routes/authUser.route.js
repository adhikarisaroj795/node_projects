const express = require("express");
const router = express.Router();
const UserController = require("../controllers/authController.user");
const usr_ctrl = new UserController();

router.route("/register").post(usr_ctrl.registerUser);
router.route("/login").post(usr_ctrl.loginUSer);
router.route("/logout").get(usr_ctrl.logOut);

router.route("/password/forget").post(usr_ctrl.forgetPassword);
router.route("/auth/:id").post().get();

module.exports = router;
