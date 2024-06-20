const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const usr_ctrl = new userController();
const { isAuthenticated } = require("../middleware/auth.middleware");

router.route("/user/update/:userId").put(isAuthenticated, usr_ctrl.updateUser);
router
  .route("/user/delete/:userId")
  .delete(isAuthenticated, usr_ctrl.deleteUser);

router.route("/user/signout").post(usr_ctrl.signOut);

module.exports = router;
