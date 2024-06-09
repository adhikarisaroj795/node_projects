const CategoryService = require("../services/categoryService");
const ErrorHandler = require("../utils/errorHandler");
class CategoryController {
  static getAllCategories = async (req, res, next) => {
    try {
      const categories = await CategoryService.getCategories();
      console.log(categories);
      if (!categories || categories.length === 0) {
        return next(new ErrorHandler("No categories added", 404));
      }
      res.status(200).json({
        status: true,
        categories: categories,
        msg: "Categories fetched success",
      });
    } catch (error) {
      next(error);
    }
  };

  static addNewCategories = async (req, res, next) => {
    try {
      const { title } = req.body;
      if (!title || title === "") {
        return next(new ErrorHandler("title is required", 400));
      }
      const categories = await CategoryService.addCategories(title);
      res.status(201).json({
        status: true,
        categories: categories,
        msg: "Categories added Successfully",
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = CategoryController;
