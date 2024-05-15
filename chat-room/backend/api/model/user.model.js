const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "please enter your email"],
    minlength: [4, "Your username must be at least of 4 characters"],
    maxlength: [20, "Your username cannot exceed 20 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    maxlength: [40, "Your email cannot exceed 40 characters"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [8, "Password must be at least 8 character"],
  },
  createdAt: {
    type: Date,
    default: function () {
      return Date.now();
    }, // Corrected default value
  },
});

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    console.error(error); // Log the error for debugging
    next(error);
  }
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
