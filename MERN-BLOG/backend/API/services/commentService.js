const commentModel = require("../models/comment.model");
const ErrorHandler = require("../utils/error.handler");

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

  static getPostComment = async (postId) => {
    try {
      const comments = await commentModel.find({ postId }).sort({
        createdAt: -1,
      });
      return comments;
    } catch (error) {
      throw error;
    }
  };

  static newComment = async (id, userId) => {
    try {
      const newComment = await commentModel.findById(id);
      if (!newComment) {
        throw new ErrorHandler("comment not found", 404);
        return;
      }
      const userIndex = newComment.likes.indexOf(userId);
      if (userIndex === -1) {
        newComment.numberOfLikes += 1;
        newComment.likes.push(userId);
      } else {
        newComment.numberOfLikes -= 1;
        newComment.likes.splice(userIndex, 1);
      }
      await newComment.save();
      return newComment;
    } catch (error) {
      throw error;
    }
  };

  static editComment = async (commentId, userId, isAdmin, content) => {
    try {
      const comment = await commentModel.findById(commentId);
      if (!comment) {
        throw new ErrorHandler("cannot found the comment", 404);
      }
      if (comment.userId !== userId && !isAdmin) {
        throw new ErrorHandler("you are not allowded to edit the comment");
      }
      const editedComment = await commentModel.findByIdAndUpdate(
        commentId,
        {
          content: content,
        },
        {
          new: true,
        }
      );
      return editedComment;
    } catch (error) {
      next(error);
    }
  };
}

module.exports = CommentService;
