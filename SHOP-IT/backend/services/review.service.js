const productModel = require("../models/product.model");

class ReviewServices {
  createReview = async (id) => {
    try {
      const product = await productModel.findById(id);
      console.log(product);
      return product;
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = ReviewServices;
