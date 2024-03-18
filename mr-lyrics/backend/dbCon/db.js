const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connected to the database");
  } catch (error) {
    console.log(`error connecting database ${error}`);
  }
};

module.exports = connectDb;
