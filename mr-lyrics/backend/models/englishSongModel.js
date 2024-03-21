const { Schema, model } = require('mongoose');

const englishSongSchema = new Schema({
  songname: {
    type: String,
    required: true,
  },
  singername: {
    type: String,
    required: true,
  },
  musiclabel: {
    type: String,
    required: true,
  },
  releaseddate: {
    type: String,
    required: true,
  },
  lyrics: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

const EnglishSong = new model('EnglishSong', englishSongSchema);
module.exports = EnglishSong;
