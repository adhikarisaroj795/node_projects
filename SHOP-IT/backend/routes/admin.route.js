const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin.controllers");
const {
  authRoles,
  isAuthenticated,
} = require("../middlewares/auth.middleware");
const admn_ctrl = new AdminController();

router
  .route("/users")
  .get(isAuthenticated, authRoles("admin"), admn_ctrl.allUsers)
  .put();

router
  .route("/users/:id")
  .get(isAuthenticated, authRoles("admin"), admn_ctrl.getUserByid)
  .put(isAuthenticated, authRoles("admin"), admn_ctrl.updateUser)
  .delete(isAuthenticated, authRoles("admin"), admn_ctrl.deleteUser);

module.exports = router;
