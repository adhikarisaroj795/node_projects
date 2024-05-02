const contactMeSvc = require("../service/contactme.service");
const ErrorHandler = require("../utils/error.handler");
class ContactMe {
  constructor() {
    this.contactMe_svc = new contactMeSvc();
  }

  addContactMsg = async (req, res, next) => {
    try {
      const { name, email, message } = req.body;
      if (!name || !email || !message) {
        const error = new Error("enter valid data");
        error.statusCode = 400;
        throw error;
      }
      const msg = await this.contactMe_svc.contactMsg(name, email, message);
      res.status(200).json({
        success: true,
        message: msg,
        msg: "Msg sent Sucessfully",
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = ContactMe;
