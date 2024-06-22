const postModel = require("../models/post.model");

class PostService {
  static createPost = async (req, slug) => {
    try {
      const newPost = new postModel({
        ...req.body,
        slug,
        userId: req.user.id,
      });
      const savedPost = await newPost.save();
      return savedPost;
    } catch (error) {
      throw error;
    }
  };
}
module.exports = PostService;
