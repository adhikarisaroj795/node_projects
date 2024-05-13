const mongoose = require("mongoose");
const validator = require("validator");
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Full name"],
    minlength: [3, "Your name must be atleast 4 characters"],
    maxlength: [50, "Your name cannot exceed 20 characters"],
  },
  email: {
    type: String,
    required: [true, "please enter your email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
  },
  message: {
    type: String,
    required: [true, "Please enter message"],
    minlength: [50, "your message should br atleast of 50 characters"],
    maxlength: [500, "your message should not be more than 500  characters"],
  },
});

const contactModel = mongoose.model("Contact", ContactSchema);

module.exports = contactModel;
