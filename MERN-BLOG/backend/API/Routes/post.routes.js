const express = require("express");
const { isAuthenticated } = require("../middleware/auth.middleware");
const router = express.Router();
const postController = require("../controllers/post.controller");

router
  .route("/admin/createpost")
  .post(isAuthenticated, postController.createPost);

module.exports = router;
