const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const coon = await mongoose.connect(process.env.Mongo_URI);
    console.log(`MongoDb connected with the host: ${coon.connection.host}`);
  } catch (error) {
    console.log("MongoDb Connection error", error);
    process.exit(1);
  }
};

module.exports = connectDb;
