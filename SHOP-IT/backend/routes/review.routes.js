const express = require("express");
const router = express.Router();
const ReviewController = require("../controllers/review.controller");
const revw_ctrl = new ReviewController();
const { isAuthenticated } = require("../middlewares/auth.middleware");

router
  .route("/review")
  .put(isAuthenticated, revw_ctrl.createProductReview)
  .get(revw_ctrl.getProductReviews)
  .delete(isAuthenticated, revw_ctrl.deleteReview);

module.exports = router;
