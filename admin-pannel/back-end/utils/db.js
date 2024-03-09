const mongoose = require('mongoose');

// const URI = 'mongodb://127.0.0.1:27017/mern_admin';
const URI = process.env.MONGODB_URI;
// mongoose.connect(URL)

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log('connected to databse');
  } catch (error) {
    console.log(error);
    console.error('database connection failed');
    process.exit(0);
  }
};

module.exports = connectDb;
