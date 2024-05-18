const express = require("express");
const router = express.Router();
const userAuthController = require("../Controller/userAuthController");
const usrAuth_ctrl = new userAuthController();

console.log("hellojhj");
router.route("/register").post(usrAuth_ctrl.register);

module.exports = router;
