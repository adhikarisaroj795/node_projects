const BlogSrvc = require("../services/blog.service");
const ErrorHandler = require("../utils/errorHandler");
class BlogController {
  static getAllBlogs = async (req, res, next) => {
    try {
      const blogs = await BlogSrvc.getBlogs();
      res.status(200).json({
        status: true,
        blogs: blogs,
        msg: "blogs fetched success",
      });
    } catch (error) {
      next(error);
    }
  };
  static addNewBlog = async (req, res, next) => {
    try {
      const { title, category, description } = req.body;
      const thumbnail = req.file.filename;
      if (
        !title ||
        title === "" ||
        !category ||
        category === "" ||
        !description ||
        description === ""
      ) {
        return next(new ErrorHandler("all field are required", 400));
      }
      const newBlog = await BlogSrvc.addBlog(
        title,
        category,
        description,
        thumbnail
      );
    } catch (error) {
      next(error);
    }
  };

  static getSingleBlog = async (req, res, next) => {
    res.send("get single blog");
  };
}

module.exports = BlogController;
