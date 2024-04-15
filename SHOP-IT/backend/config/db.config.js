const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI)
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
