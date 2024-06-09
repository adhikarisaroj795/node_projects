const express = require("express");
const BlogController = require("../controller/blog.Controller");
const uploader = require("../middlewares/uploader.middleware");

const router = express.Router();

router
  .route("/")
  .get(BlogController.getAllBlogs)
  .post(uploader.single("thumbnail"), BlogController.addNewBlog);

router.route("/:id", BlogController.getSingleBlog);

module.exports = router;
