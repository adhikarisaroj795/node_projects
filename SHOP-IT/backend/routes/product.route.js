const express = require("express");
const productController = require("../controllers/product.controller");
const prod_ctrl = new productController();
const router = express.Router();
const {
  isAuthenticated,
  authRoles,
} = require("../middlewares/auth.middleware");

router
  .route("/product")
  .post(isAuthenticated, authRoles("admin"), prod_ctrl.addNewProduct)
  .get(prod_ctrl.getProducts);

router
  .route("/product/:id")
  .get(prod_ctrl.getProductById)
  .delete(isAuthenticated, authRoles("admin"), prod_ctrl.deleteProductById)
  .put(isAuthenticated, authRoles("admin"), prod_ctrl.updateProductbyId);

module.exports = router;
