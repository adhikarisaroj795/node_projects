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

  static getAllPosts = async (req) => {
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.order === "asc" ? 1 : -1;

      const filters = {
        ...(req.query.userId && { userId: req.query.userId }),
        ...(req.query.category && { category: req.query.category }),
        ...(req.query.slug && { slug: req.query.slug }),
        ...(req.query.postId && { _id: req.query.postId }),
        ...(req.query.searchTerm && {
          $or: [
            { title: { $regex: req.query.searchTerm, $options: "i" } },
            { content: { $regex: req.query.searchTerm, $options: "i" } },
          ],
        }),
      };

      const post = await postModel
        .find(filters)
        .sort({ updatedAt: sortDirection })
        .skip(startIndex)
        .limit(limit);

      console.log(post);

      const totalPost = await postModel.countDocuments(filters);
      const now = new Date();

      const oneMonthsAgo = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate()
      );

      const lastMonthPosts = await postModel.countDocuments({
        createdAt: { $gte: oneMonthsAgo },
      });
      return {
        post,
        totalPost,
        lastMonthPosts,
      };
    } catch (error) {
      throw error;
    }
  };

  static deletePost = async (req) => {
    const deletedPost = await postModel.findByIdAndDelete(req.params.postId);
    return deletedPost;
  };

  static updatePost = async (req) => {
    try {
      const updatedPost = await postModel.findByIdAndUpdate(
        req.params.postId,
        {
          $set: {
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            image: req.body.image,
          },
        },
        { new: true }
      );
      return updatedPost;
    } catch (error) {
      throw error;
    }
  };
}
module.exports = PostService;
