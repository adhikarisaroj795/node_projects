const contactModel = require("../model/contactMe.model");
class ContactMeService {
  contactMsg = async (name, email, message) => {
    try {
      const newMsg = await contactModel.create({
        name,
        email,
        message,
      });
      return newMsg;
    } catch (error) {
      throw error;
    }
  };
}
module.exports = ContactMeService;
