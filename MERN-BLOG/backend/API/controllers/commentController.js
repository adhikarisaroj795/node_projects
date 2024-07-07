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

  static getComments = async (req, res, next) => {
    try {
      if (!req.user.isAdmin) {
        return next(
          new ErrorHandler("you are not allowded to get all comments", 403)
        );
      }
      const stIndex = req.query.startIndex;
      const limit = req.query.limit;
      const sort = req.query.sort;
      const { comments, totalComments, lastMonthComments } =
        await cmt_svc.getAllComments(stIndex, limit, sort);
      res.status(200).json({
        status: true,
        comments: comments,
        totalComments: totalComments,
        lastMonthComments: lastMonthComments,
        msg: "all comment fetched success",
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = CommentController;
