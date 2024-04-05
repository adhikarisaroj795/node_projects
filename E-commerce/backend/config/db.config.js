const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    // Instead of using next, you can throw an error or handle it differently
    // throw error; // Throw the error if you want to handle it globally
    process.exit(1); // Exit the process with non-zero status code
  }
};

module.exports = connectDb;
