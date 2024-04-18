const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/order.controller");
const odr_ctrl = new OrderController();
const {
  isAuthenticated,
  authRoles,
} = require("../middlewares/auth.middleware");

router.route("/order").post(isAuthenticated, odr_ctrl.newOrder);
router.route("/order/me").get(isAuthenticated, odr_ctrl.myOrders);
router
  .route("/admin/order")
  .get(isAuthenticated, authRoles("admin"), odr_ctrl.getAllOrders);
router
  .route("/admin/order/:id")
  .put(isAuthenticated, authRoles("admin"), odr_ctrl.updateOrderProcess)
  .delete(isAuthenticated, authRoles("admin"), odr_ctrl.deleteOrder);

router.route("/order/:id").get(odr_ctrl.getOrderbyId);

module.exports = router;
