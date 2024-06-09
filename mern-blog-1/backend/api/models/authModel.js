const express = require("express");
const bcryptjs = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter your username"],
    minlength: [4, "Your Username must be atleast 4 characters"],
    maxlength: [20, "Your username cannot exceed 40 characters"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    maxlength: [40, "Your email cannot exceed 40 characters"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [8, "Password must be atleast 8 characters"],
  },
});

//Encrypt Password before saving

authSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

authSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcryptjs.compare(enteredPassword, this.password);
};

authSchema.methods.getJwtToken = function () {
  return jwt.sign(
    {
      username: this._id,
      userId: this._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_TIME,
    }
  );
};
const authModel = mongoose.model("User", authSchema);
module.exports = authModel;
