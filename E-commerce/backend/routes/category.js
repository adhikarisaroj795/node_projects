const express = require('express');
const router = express.Router();
const loginCheck = require('../app/middleware/loginmiddleware');
const { isAdmin } = require('../app/middleware/rbac.middlwware');
const uploder = require('../app/middleware/uploader.middleware');
const categoryController = require('../app/controller/category.controller');
const cat_ctrl = new categoryController();

router
  .route('/')
  .get(cat_ctrl.getAllCats)
  .post(loginCheck, isAdmin, uploder.single('image'), cat_ctrl.createCategory);
router
  .route('/:id')
  .get(cat_ctrl.getCategoryDetails)
  .put(loginCheck, isAdmin, uploder.single('image'), cat_ctrl.updateCategory)
  .delete(loginCheck, isAdmin, cat_ctrl.deleteCategoryByid);

module.exports = router;
