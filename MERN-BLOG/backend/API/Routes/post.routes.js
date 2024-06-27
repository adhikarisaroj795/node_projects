const express = require("express");
const { isAuthenticated } = require("../middleware/auth.middleware");
const router = express.Router();
const postController = require("../controllers/post.controller");

router
  .route("/admin/createpost")
  .post(isAuthenticated, postController.createPost);

router.route("/admin/allposts").get(postController.getPosts);
router
  .route("/admin/deletepost/:postId/:userId")
  .delete(isAuthenticated, postController.deletePost);

module.exports = router;
