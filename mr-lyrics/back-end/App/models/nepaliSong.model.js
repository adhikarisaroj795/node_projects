const mongoose = require("mongoose");
const nepaliSongSchema = mongoose.Schema({
  nepalisongname: {
    type: String,
    required: true,
  },
  nepalisingername: {
    type: String,
    required: true,
  },
  nepalimusiclabel: {
    type: String,
    required: true,
  },
  nepalisonglanguage: {
    type: String,
    default: "Nepali",
  },
  nepalilyrics: {
    type: String,
    required: true,
  },
  nepalisongimage: {
    type: String,
  },
  nepalisonglink: {
    type: String,
  },
  nepalisongdescription: {
    type: String,
    required: true,
  },
});

const nepaliSongModel = mongoose.model("NepaliSong", nepaliSongSchema);

module.exports = nepaliSongModel;
