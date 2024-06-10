const express = require("express");
const BlogController = require("../controller/blog.Controller");
const uploader = require("../middlewares/uploader.middleware");
const { isAuthenticated } = require("../middlewares/authMiddleware");

const router = express.Router();

router
  .route("/")
  .get(isAuthenticated, BlogController.getAllBlogs)
  .post(
    isAuthenticated,
    uploader.single("thumbnail"),
    BlogController.addNewBlog
  );

router.route("/:id").get(isAuthenticated, BlogController.getSingleBlog);

module.exports = router;
