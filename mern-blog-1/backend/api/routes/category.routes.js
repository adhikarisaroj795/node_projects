const express = require("express");
const router = express.Router();
const categoriesController = require("../controller/category.controller");
const { isAuthenticated } = require("../middlewares/authMiddleware");

router
  .route("/")
  .post(isAuthenticated, categoriesController.addNewCategories)
  .get(isAuthenticated, categoriesController.getAllCategories);

module.exports = router;
