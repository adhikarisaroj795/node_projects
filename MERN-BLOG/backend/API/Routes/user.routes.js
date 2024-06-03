const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const usr_ctrl = new userController();
const { isAuthenticated } = require("../middleware/auth.middleware");

router.route("/user/update/:userId").put(isAuthenticated, usr_ctrl.updateUser);

module.exports = router;
