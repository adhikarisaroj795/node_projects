const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connected to the database");
  } catch (error) {
    console.log("Error connecting to the database");
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
