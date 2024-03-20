const { Schema, model } = require('mongoose');

const nepalisongSchema = new Schema({
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

// song, singer music label, language, released DAte, Duration:, lyrics

const NepaliSongs = new model('NepaliSongs', nepalisongSchema);
module.exports = NepaliSongs;
