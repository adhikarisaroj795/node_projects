const express = require("express");
const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((con) => {
      console.log(`Mongo Db connected with host: ${con.connection.host}`);
    })
    .catch((err) => {
      console.log("MongoDb connextion error: ", err);
    });
};

module.exports = connectDb;
