const blogModel = require("../models/blogModel");
const ErrorHandler = require("../utils/errorHandler");

class BlogService {
  static getBlogs = async () => {
    try {
      const blogs = await blogModel.find({});
      if (!blogs || blogs.length === 0) {
        throw new ErrorHandler("No blogs found");
      }
      return blogs;
    } catch (error) {
      throw error;
    }
  };
  static addBlog = async (title, category, description, thumbnail) => {
    try {
      const newBlog = new blogModel({
        title: title,
        category: category,
        description: description,
        thumbnail: thumbnail,
      });
    } catch (error) {
      throw error;
    }
  };
}
module.exports = BlogService;
