const express = require("express");
const router = express.Router();
const categoriesController = require("../controller/category.controller");

router
  .route("/")
  .post(categoriesController.addNewCategories)
  .get(categoriesController.getAllCategories);

module.exports = router;
