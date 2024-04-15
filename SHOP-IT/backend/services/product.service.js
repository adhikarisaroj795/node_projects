const productModel = require("../models/product.model");

class ProductService {
  createNewProduct = (data) => {
    return productModel.create(data);
  };
  getAllProducts = () => {
    return productModel.find();
  };
  getProductbyId = async (id) => {
    try {
      const product = await productModel.findById(id);
      return product;
    } catch (error) {
      console.log("no id matched");
      return null;
    }
  };
  updateProduct = async (id, data) => {
    try {
      let updatedProduct = await productModel.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
      return updatedProduct;
    } catch (error) {
      console.log("failed updating product id not matched", error.message);
      return null;
    }
  };
  deleTeProduct = async (id) => {
    const deletedItem = productModel.findByIdAndDelete(id);
    return deletedItem;
  };
}

module.exports = ProductService;
