const express = require("express");
const router = express.Router();
const UserController = require("../controllers/authController.user");
const usr_ctrl = new UserController();
const { isAuthenticated } = require("../middlewares/auth.middleware");

router.route("/register").post(usr_ctrl.registerUser);
router.route("/login").post(usr_ctrl.loginUSer);
router.route("/logout").get(usr_ctrl.logOut);

router.route("/password/forget").post(usr_ctrl.forgetPassword);
router.route("/me").get(isAuthenticated, usr_ctrl.getUserProfile);
router.route("/password/update").put(isAuthenticated, usr_ctrl.updatePassword);
router.route("/me/update").put(isAuthenticated, usr_ctrl.updateProfile);

router.route("/password/reset/:token").put(usr_ctrl.resetPassword);
router.route("/auth/:id").post().get();

module.exports = router;
