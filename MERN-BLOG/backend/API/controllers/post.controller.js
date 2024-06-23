const post_svc = require("../services/post.service");
const ErrorHandler = require("../utils/error.handler");
class PostController {
  static createPost = async (req, res, next) => {
    try {
      const { title, content } = req.body;
      if (!req.user.isAdmin) {
        return next(new ErrorHandler("You are not allowed to create a post"));
      }
      if (!title || !content) {
        return next(new ErrorHandler("Please provide all required fields"));
      }
      const slug = title
        .split(" ")
        .join("-")
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]/g, "-");

      const newPost = await post_svc.createPost(req, slug);
      res.status(201).json({
        staus: true,
        post: newPost,
        msg: "Post Created Successfully",
      });
    } catch (error) {
      next(error);
    }
  };

  static getPosts = async (req, res, next) => {
    try {
      const { post, totalPost, lastMonthPosts } = await post_svc.getAllPosts(
        req
      );
      res.status(200).json({
        status: true,
        posts: post,
        toatalPosts: totalPost,
        lastmonthPosts: lastMonthPosts,
        msg: "post fetched success",
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = PostController;
