const express = require("express");
const router = express.Router();
const AuthController = require("../controller/authController");

router.route("/user/register").post(AuthController.userRegistration);
router.route("/user/login").post(AuthController.userLogin);




module.exports = router;
