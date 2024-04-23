const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator"); // Import the validator package

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter your Username"],
    minlength: [4, "Your username must be at least 4 characters"],
    maxlength: [20, "Your username cannot exceed 20 characters"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    maxlength: [40, "Your email cannot exceed 40 characters"],
    validate: {
      validator: validator.isEmail, // Use the validator package to check for a valid email format
      message: "Please provide a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [8, "Password must be at least 8 characters"],
  },
  isAvtarImageSet: {
    type: Boolean,
    default: false,
  },
  avtarImage: {
    type: String,
    default: "",
  },
});

// Encrypt password before saving
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

//compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
