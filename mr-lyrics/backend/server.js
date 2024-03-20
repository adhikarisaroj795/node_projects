require('dotenv').config();
const express = require('express');
const connectDb = require('./dbCon/db');
const addNepaliSongs = require('./controller/nepalisong-controller');
const nepalisongRoute = require('./router/nepalisongRouter');
const errorMiddleware = require('./middleware/error-middleware');

const app = express();

//middleware .................../
app.use(express.json());

app.use('/api/add', nepalisongRoute);

// app.post("/nepali-lyrics", (req, res) => {

// });

app.use(errorMiddleware);

///SERVER.................///
const PORT = 2002;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
});
