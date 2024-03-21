require('dotenv').config();
const express = require('express');
const connectDb = require('./dbCon/db');
const getNepalisongRoute = require('./router/getNepalisongRoute');
const nepalisongRoute = require('./router/nepalisongRouter');
const deleteNepalisongRoute = require('./router/nepalisong-deleteRouter');
const errorMiddleware = require('./middleware/error-middleware');
const updateNepaliSong = require('./router/updateNepalisomgRouter');
const searchNepaliSong = require('./router/searchNepaliSongRouter');

const app = express();

//middleware .................../
app.use(express.json());

app.use('/api/add', nepalisongRoute);
app.use('/api/nepali', getNepalisongRoute);
app.use('/api/nepali-song', deleteNepalisongRoute);
app.use('/api/update', updateNepaliSong);
app.use('/api/nepali-song', searchNepaliSong);

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
