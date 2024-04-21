const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((con) => {
      console.log(
        `MongoDb database connected with the HOST: ${con.connection.host}`
      );
    })
    .catch((err) => {
      console.error("MongoDb connection error:", err);
    });
};

module.exports = connectDb;
