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
}

module.exports = CommentController;
