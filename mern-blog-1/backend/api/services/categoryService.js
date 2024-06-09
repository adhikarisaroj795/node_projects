const categoryModel = require("../models/categoryModel");
const ErrorHandler = require("../utils/errorHandler");

class CategoryService {
  static getCategories = async () => {
    try {
      const categories = await categoryModel.find({});
      return categories;
    } catch (error) {
      throw error;
    }
  };
  static addCategories = async (title) => {
    try {
      const isCategoryExist = await categoryModel.findOne({ title: title });
      if (isCategoryExist) {
        throw new ErrorHandler("category already exist", 400);
      }
      const newCategory = new categoryModel({
        title,
      });
      await newCategory.save();
      return newCategory;
    } catch (error) {
      throw error;
    }
  };
}
module.exports = CategoryService;
