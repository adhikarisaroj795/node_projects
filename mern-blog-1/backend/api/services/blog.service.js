const blogModel = require("../models/blogModel");
const ErrorHandler = require("../utils/errorHandler");

class BlogService {
  static getBlogs = async (id) => {
    try {
      const blogs = await blogModel.find({ user: id });
      if (!blogs || blogs.length === 0) {
        throw new ErrorHandler("No blogs found", 404);
      }
      return blogs;
    } catch (error) {
      throw error;
    }
  };
  static addBlog = async (title, category, description, thumbnail, id) => {
    try {
      const newBlog = new blogModel({
        title: title,
        category: category,
        description: description,
        thumbnail: thumbnail,
        user: id,
      });

      await newBlog.save();

      return newBlog;
    } catch (error) {
      throw error;
    }
  };

  static fetchSingleBlog = async (id) => {
    try {
      const singleBlog = blogModel.findById(id);
      if (!singleBlog) {
        throw new ErrorHandler("No Blog found", 404);
      }
      return singleBlog;
    } catch (error) {
      throw error;
    }
  };
}
module.exports = BlogService;
