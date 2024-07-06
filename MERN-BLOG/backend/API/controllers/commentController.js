const ErrorHandler = require("../utils/error.handler");
const cmt_svc = require("../services/commentService");

class CommentController {
  static createComment = async (req, res, next) => {
    try {
      const { content, postId, userId } = req.body;

      if (userId !== req.user.id) {
        return next(
          new ErrorHandler("You are not allowded to create this comment")
        );
      }
      const newComment = await cmt_svc.createComment(content, postId, userId);

      res.status(200).json({
        status: true,
        comment: newComment,
        msg: "comment created successfully",
      });
    } catch (error) {
      next(error);
    }
  };

  static getPostComment = async (req, res, next) => {
    try {
      const postId = req.params.postId;
      const comment = await cmt_svc.getPostComment(postId);

      res.status(200).json({
        status: true,
        comments: comment,
        msg: "comment fetched success",
      });
    } catch (error) {
      next(error);
    }
  };

  static likeComment = async (req, res, next) => {
    try {
      const userId = req.user.id;
      const commentId = req.params.commentId;
      const comment = await cmt_svc.newComment(commentId, userId);
      res.status(200).json({
        status: 200,
        comment: comment,
      });
    } catch (error) {
      next(error);
    }
  };

  static editComment = async (req, res, next) => {
    const commentId = req.params.commentId;
    const isAdmin = req.user.isAdmin;
    const userId = req.user.id;
    const content = req.body.content;
    try {
      const comment = await cmt_svc.editComment(
        commentId,
        userId,
        isAdmin,
        content
      );
      res.status(200).json({
        status: true,
        editedComment: comment,
        msg: "comment edited",
      });
    } catch (error) {
      next(error);
    }
  };
  static deleteComment = async (req, res, next) => {
    try {
      const commentId = req.params.commentId;
      const isAdmin = req.user.isAdmin;
      const userId = req.user.id;
      const deletedComment = await cmt_svc.deleteComment(
        commentId,
        isAdmin,
        userId
      );

      res.status(200).json({
        status: true,
        deletedComment: deletedComment,
        msg: "comment deleted success",
      });
    } catch (error) {
      next(error);
    }
  };

  static;
}

module.exports = CommentController;
