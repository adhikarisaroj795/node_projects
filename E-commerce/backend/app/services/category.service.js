const categoryModel = require('../model/category.model');

class CategoryService {
  validateCategoryData = (data) => {
    let error = {};
    if (!data.title) {
      error['title'] = 'Title is requied';
    } else {
      delete error['title'];
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
  addCategory = (data) => {
    let cat_obj = new categoryModel(data);
    return cat_obj.save();
  };
  updateCategory = (data, id) => {
    return categoryModel.findByIdAndUpdate(id, {
      $set: data,
    });
  };
  getAllCategory = () => {
    return categoryModel.find().populate('parent').populate('brand');
  };
  getAllCategoryDetail = (id) => {
    return categoryModel.findById(id).populate('parent').populate('brand');
  };
  deleteCategoryByid = (id) => {
    return categoryModel.findByIdAndDelete(id);
  };
}
module.exports = CategoryService;
