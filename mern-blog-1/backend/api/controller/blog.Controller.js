const BlogSrvc = require("../services/blog.service");
const ErrorHandler = require("../utils/errorHandler");
class BlogController {
  static getAllBlogs = async (req, res, next) => {
    try {
      const id = req.user._id;
      const blogs = await BlogSrvc.getBlogs(id);
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
      console.log(req.user);
      const id = req.user._id;

      const { title, category, description } = req.body;
      const thumbnail = req.file.filename;
      if (
        !title ||
        title === "" ||
        !category ||
        category === "" ||
        !description ||
        description === "" ||
        !thumbnail ||
        !req.file
      ) {
        return next(new ErrorHandler("all field are required", 400));
      }
      const newBlog = await BlogSrvc.addBlog(
        title,
        category,
        description,
        thumbnail,
        id
      );
      res.status(200).json({
        status: true,
        blog: newBlog,
        msg: "blog created sucessfully",
      });
    } catch (error) {
      next(error);
    }
  };

  static getSingleBlog = async (req, res, next) => {
    const { id } = req.params;
    try {
      if (!id) {
        return next(new ErrorHandler("invalid url", 400));
      }
      const singleBlog = await BlogSrvc.fetchSingleBlog(id);
      res.status(200).json({
        status: 200,
        blog: singleBlog,
        msg: "blog fetched success",
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = BlogController;
