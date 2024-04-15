const express = require("express");
const productController = require("../controllers/product.controller");
const prod_ctrl = new productController();
const router = express.Router();

router
  .route("/product")
  .post(prod_ctrl.addNewProduct)
  .get(prod_ctrl.getProducts);

router
  .route("/product/:id")
  .get(prod_ctrl.getProductById)
  .delete(prod_ctrl.deleteProductById)
  .put(prod_ctrl.updateProductbyId);

module.exports = router;
