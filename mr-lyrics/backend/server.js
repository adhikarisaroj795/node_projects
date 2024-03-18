require('dotenv').config();
const express = require('express');
const connectDb = require('./dbCon/db');
const addNepaliSongs = require('./controller/nepalisong-controller');
const nepalisongRoute = require('./router/nepalisongRouter');

const app = express();

//middleware .................../
app.use(express.json());

app.use('/api/add', nepalisongRoute);

// app.post("/nepali-lyrics", (req, res) => {

// });

///SERVER.................///
const PORT = 9999;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
});
