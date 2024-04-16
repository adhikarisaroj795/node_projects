const express = require("express");
const router = express.Router();
const UserController = require("../controllers/authController.user");
const usr_ctrl = new UserController();

router.route("/register").post(usr_ctrl.registerUser);

router.route("/auth/:id").post().get();

module.exports = router;
