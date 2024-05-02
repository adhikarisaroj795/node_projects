const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((con) => {
      console.log(`Mongo Db connected with the host: ${con.connection.host}`);
    })
    .catch((err) => {
      console.error("MongoDb connection error : ", err);
    });
};
module.exports = connectDb;
