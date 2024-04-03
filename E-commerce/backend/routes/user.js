const express = require("express");
const router = express.Router();
const loginCheck = require("../app/middleware/loginmiddleware");
const UserController = require("../app/controller/user.controller");
const user_ctrl = new UserController();
const uploder = require("../app/middleware/uploader.middleware");

router
  .route("/")
  .get(user_ctrl.listAllUsers)
  .post(uploder.single("image"), user_ctrl.useRegister); //toupload multiple file use array()

router
  .route("/:id")
  .get(loginCheck, (req, res, next) => {})
  .patch((req, res, next) => {});

module.exports = router;
