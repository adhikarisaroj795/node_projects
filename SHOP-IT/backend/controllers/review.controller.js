const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const productModel = require("../models/product.model");
const ReviewServices = require("../services/review.service");
class ReviewController {
  constructor() {
    this.revw_svc = new ReviewServices();
  }

  createProductReview = catchAsyncErrors(async (req, res, next) => {
    const { rating, comment, productId } = req.body;
    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    };
    const product = await this.revw_svc.createReview(productId);
    console.log(product);
    const isReviewed = product.reviews.find(
      (r) => r.user && r.toString() === req.user._id.toString()
    );
    if (isReviewed) {
      product.reviews.forEach((review) => {
        if (review.user.toString() === req.user._id.toString()) {
          review.comment = comment;
          review.rating = rating;
        }
      });
    } else {
      product.reviews.push(review);
      product.numOfReviews = product.reviews.length;
    }
    product.ratings =
      product.reviews.reduce((accum, item) => item.rating + accum, 0) /
      product.reviews.length;
    await product.save({ validateBeforeSave: false });

    res.status(200).json({
      sucess: true,
    });
  });
  //Get product Reviews => /api/v1/reviews
  getProductReviews = catchAsyncErrors(async (req, res, next) => {
    const product = await productModel.findById(req.query.id);
    console.log(product);
    res.status(200).json({
      sucess: true,
      reviews: product.reviews,
    });
  });
  //delete product review /api/v1/review
  deleteReview = catchAsyncErrors(async (req, res, next) => {
    try {
      // Find the product by its ID specified in the request query
      const product = await productModel.findById(req.query.productId);

      // Check if the product exists
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }

      // Filter out the review to be deleted from the product's reviews array
      const reviews = product.reviews.filter(
        (review) => review._id.toString() !== req.query.id.toString()
      );

      // Calculate the number of reviews left after the deletion
      const numOfReviews = reviews.length;

      // Calculate the average rating of the product
      const ratings =
        numOfReviews > 0
          ? product.reviews.reduce((acc, item) => item.rating + acc, 0) /
            numOfReviews
          : 0;

      // Update the product document in the database
      product.reviews = reviews;
      product.ratings = ratings;
      product.numOfReviews = numOfReviews;
      await product.save();

      res.status(200).json({
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  });
}

module.exports = ReviewController;
