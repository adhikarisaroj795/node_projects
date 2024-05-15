const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((con) => {
      console.log(
        `mongodb database connected with the HOST: ${con.connection.host}`
      );
    })
    .catch((err) => {
      console.error("Mongo db error: ", err);
    });
};

module.exports = connectDb;
