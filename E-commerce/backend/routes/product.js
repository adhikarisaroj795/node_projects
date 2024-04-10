const express = require('express');
const loginCheck = require('../app/middleware/loginmiddleware');
const { isAdminSeller } = require('../app/middleware/rbac.middlwware');
const uploder = require('../app/middleware/uploader.middleware');
const router = express.Router();
const productController = require('../app/controller/product.controller');
const prod_ctrl = new productController();

router
  .route('/')
  .get((req, res, next) => {})
  .post(
    loginCheck,
    isAdminSeller,
    uploder.array('image'),
    prod_ctrl.addProduct
  );

router
  .route('/:id')
  .get((req, res, next) => {})
  .patch((req, res, next) => {});

module.exports = router;
