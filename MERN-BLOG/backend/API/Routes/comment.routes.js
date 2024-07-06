const express = require("express");
const cmt_ctrl = require("../controllers/commentController");
const { isAuthenticated } = require("../middleware/auth.middleware");

const router = express.Router();

router.route("/comment/create").post(isAuthenticated, cmt_ctrl.createComment);
router
  .route("/comment/getComment/:postId")
  .get(isAuthenticated, cmt_ctrl.getPostComment);

router
  .route("/comment/like/:commentId")
  .put(isAuthenticated, cmt_ctrl.likeComment);
router
  .route("/comment/edit/:commentId")
  .put(isAuthenticated, cmt_ctrl.editComment);
router
  .route("/comment/delete/:commentId")
  .delete(isAuthenticated, cmt_ctrl.deleteComment);
router
  .route("/comment/getAllComments")
  .get(isAuthenticated, cmt_ctrl.getComments);

module.exports = router;

// 8 : 38
