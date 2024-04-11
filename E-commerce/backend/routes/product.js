const express = require('express');
const loginCheck = require('../app/middleware/loginmiddleware');
const { isAdminSeller } = require('../app/middleware/rbac.middlwware');
const uploder = require('../app/middleware/uploader.middleware');
const router = express.Router();
const productController = require('../app/controller/product.controller');
const prod_ctrl = new productController();

router
  .route('/')
  .get(prod_ctrl.getAllProducts)
  .post(
    loginCheck,
    isAdminSeller,
    uploder.array('images'),
    prod_ctrl.addProduct
  );

router
  .route('/:id')
  .get(prod_ctrl.getProductById)
  .put(
    loginCheck,
    isAdminSeller,
    uploder.array('images'),
    prod_ctrl.updateProduct
  )
  .delete(loginCheck, isAdminSeller, prod_ctrl.deleteProduct);

router
  .route('/:id/:image_name')
  .delete(loginCheck, isAdminSeller, prod_ctrl.deleteImage);
module.exports = router;
