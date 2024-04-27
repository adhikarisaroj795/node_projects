const messageModel = require("../model/message.model");
const ErrorHandler = require("../utils/error.handler");

class MessageService {
  postMsg = async (req) => {
    try {
      const { from, to, message } = req.body;
      const data = await messageModel.create({
        message: { text: message },
        users: [from, to],
        sender: from,
      });
      if (!data) {
        const error = new Error("Error while adding msg");
        error.statusCode = 500;
        throw error;
      }
      return data;
    } catch (error) {
      throw error;
    }
  };
  messages = async (req) => {
    try {
      const { from, to } = req.body;
      console.log("hello");

      const messages = await messageModel
        .find({
          users: {
            $all: [from, to],
          },
        })
        .sort({ updatedAt: 1 });
      console.log(messages);

      // Check if messages array is empty

      const projectedMessages = messages.map((msg) => {
        return {
          fromSelf: msg.sender.toString() === from,
          message: msg.message.text,
        };
      });

      return projectedMessages;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

module.exports = MessageService;
