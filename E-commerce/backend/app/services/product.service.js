const productModel = require('../model/product.model');

class ProductService {
  validateProductData = (data) => {
    let error = {};
    if (!data.title) {
      error['title'] = 'Title is required';
    } else {
      delete error['title'];
    }
    if (!data.category) {
      error['category'] = 'Category is required'; // Corrected typo
    } else {
      delete error['category'];
    }
    if (!data.price) {
      error['price'] = 'Price is required'; // Consistency in error messages
    } else {
      delete error['price'];
    }
    if (!data.status) {
      error['status'] = 'Status is required';
    } else {
      delete error['status'];
    }
    if (Object.keys(error).length <= 0) {
      return null;
    } else {
      console.log(error);
      return error;
    }
  };

  addProduct = (data) => {
    let prod_obj = new productModel(data);

    return prod_obj.save();
  };

  updateProduct = async (data, id) => {
    try {
      // Find the existing product
      let product = await productModel.findById(id);

      // Merge old images with new images if images are provided
      let updatedImages = data.images
        ? [...product.images, ...data.images]
        : product.images;

      // Update the product with merged images
      let updatedProduct = await productModel.findByIdAndUpdate(
        id,
        {
          ...data,
          images: updatedImages,
        },
        { new: true }
      );

      return updatedProduct;
    } catch (error) {
      throw error;
    }
  };

  getAllProduct = () => {
    return productModel.find();
  };

  getAllProductDetail = (id) => {
    return productModel.findById(id).populate('category').populate('brand');
  };

  deleteProductByid = (id) => {
    return productModel.findByIdAndDelete(id);
  };
}

module.exports = ProductService;
