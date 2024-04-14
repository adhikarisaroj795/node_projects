const nepaliSongModel = require("../models/nepaliSong.model");

class NepaliSongService {
  validateNepaliSongsData = (data, file) => {
    let error = {};
    if (!data.nepalisongname) {
      error["nepalisongname"] = "nepalisongname is required";
    } else {
      delete error["nepalisongname"];
    }
    if (!data.nepalisingername) {
      error["nepalinepalisingername"] = "nepalinepalisingername is required";
    } else {
      delete error["nepalinepalisingername"];
    }
    if (!data.nepalimusiclabel) {
      error["nepalimusiclabel"] = "nepalimusiclabel is required";
    } else {
      delete error["nepalimusiclabel"];
    }
    if (!data.nepalisonglanguage) {
      error["nepalisonglanguage"] = "nepalisonglanguage is required";
    } else {
      delete error["nepalisonglanguage"];
    }
    if (!data.nepalilyrics) {
      error["nepalilyrics"] = "nepalilyrics is required";
    } else {
      delete error["nepalilyrics"];
    }
    if (!data.nepalisonglink) {
      error["nepalisonglink"] = "nepalisonglink is required";
    } else {
      delete error["nepalisonglink"];
    }
    if (!data.nepalisongdescription) {
      error["nepalisongdescription"] = "nepalisongdescription is required";
    } else {
      delete error["nepalisongdescription"];
    }
    if (!file) {
      error["image"] = "Image is required";
    } else {
      delete error.image;
    }
    if (Object.keys(error).length <= 0) {
      return null;
    } else {
      console.log(error);
      return error;
    }
  };
  addnepaliSongs = async (data) => {
    let nepaliSongs = new nepaliSongModel(data);
    try {
      return await nepaliSongs.save();
    } catch (error) {
      next({
        status_code: 500,
        msg: error,
      });
    }
  };

  getallNepaliSongs = () => {
    return nepaliSongModel.find();
  };

  getNepaliSongDetail = (id) => {
    return nepaliSongModel.findById(id);
  };
  updatenepalisongByid = async (data, id) => {
    try {
      let updateddata = await nepaliSongModel.findByIdAndUpdate(id, {
        $set: data,
      });
      return updateddata;
    } catch (error) {
      next({
        status_code: 400,
        msg: error,
      });
    }
  };

  deleteNepaliSongByid = async (id) => {
    return await nepaliSongModel.findByIdAndDelete(id);
  };
}

module.exports = NepaliSongService;
