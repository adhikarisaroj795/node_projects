const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const usr_ctrl = new userController();

router.route("/user").get(usr_ctrl.register);

module.exports = router;
