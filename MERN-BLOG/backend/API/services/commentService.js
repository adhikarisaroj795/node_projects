const commentModel = require("../models/comment.model");

class CommentService {
  static createComment = async (content, postId, userId) => {
    try {
      const newComment = new commentModel({
        content,
        postId,
        userId,
      });
      await newComment.save();

      return newComment;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = CommentService;
