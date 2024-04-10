const productModel = require('../model/product.model');

class ProductService {
  validateProductData = (data) => {
    let error = {};
    if (!data.title) {
      error['title'] = 'Title is requied';
    } else {
      delete error['title'];
    }
    if (!data.category) {
      error['category'] = 'Title is requied';
    } else {
      delete error['category'];
    }
    if (!data.price) {
      error['price'] = 'Price  is requied';
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
  updateProduct = (data, id) => {
    return productModel.findByIdAndUpdate(id, {
      $set: data,
    });
  };
  getAllProduct = () => {
    return productModel.find().populate('parent').populate('brand');
  };
  getAllProductDetail = (id) => {
    return productModel.findById(id).populate('parent').populate('brand');
  };
  deleteProductByid = (id) => {
    return productModel.findByIdAndDelete(id);
  };
}
module.exports = ProductService;
