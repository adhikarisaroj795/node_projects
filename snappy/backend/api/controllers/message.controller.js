const MessageService = require("../service/message.service");
const ErrorHandler = require("../utils/error.handler");
class MessageController {
  constructor() {
    this.msg_svc = new MessageService();
  }

  addMessage = async (req, res, next) => {
    try {
      const data = await this.msg_svc.postMsg(req);
      res.status(201).json({
        success: true,
        msg: "Message added sucessfully",
      });
    } catch (error) {
      next(error);
    }
  };
  getAllMessage = async (req, res, next) => {
    try {
      const messages = await this.msg_svc.messages(req);
      console.log(messages);

      res.status(200).json({
        success: true,
        msg: messages,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}
module.exports = MessageController;
