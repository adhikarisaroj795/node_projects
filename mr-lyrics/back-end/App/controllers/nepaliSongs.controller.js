const NepaliSongService = require("../services/nepaliSong.service");

class NepaliSongsController {
  constructor() {
    this.nepSong_srv = new NepaliSongService();
  }
  addNewNepaliSongs = async (req, res, next) => {
    let data = req.body;
    console.log("form form", data);
    let validationCheck = this.nepSong_srv.validateNepaliSongsData(
      req.body,
      req.file
    );
    if (validationCheck) {
      next({
        status_code: 400,
        msg: validationCheck,
      });
    } else {
      try {
        data.image = req.file.filename;
        let sucess = await this.nepSong_srv.addnepaliSongs(data);
        console.log(sucess);
        res.json({
          result: sucess,
          status: true,
          msg: "nepali song added sucessfully",
        });
      } catch (error) {
        next({
          status_code: 500,
          msg: error,
        });
      }
    }
  };
  getAllNepaliSongs = async (req, res, next) => {
    try {
      let result = await this.nepSong_srv.getallNepaliSongs();
      //   console.log("result", result.length);
      if (result.length === 0) {
        console.log("inside no result");
        res.json({
          result: "no nepalisong found",
        });
      }
      res.status(200).json({
        result: result,
        status: true,
        msg: "data fetched sucess",
      });
    } catch (error) {
      next({
        status_code: 400,
        msg: error,
      });
    }
  };
  getNepaliSongById = async (req, res, next) => {
    try {
      console.log(req.params.id);
      let song = await this.nepSong_srv.getNepaliSongDetail(req.params.id);
      console.log("byid", song);
      if (!song) {
        res.json({
          result: "no song found ",
        });
      }
      res.status(200).json({
        result: song,
        status: true,
        msg: `${req.params.id} detail fetched`,
      });
    } catch (error) {
      next({
        status_code: 400,
        msg: error,
      });
    }
  };
  updateNepaliSongById = async (req, res, next) => {
    let data = req.body;
    console.log("data", data);

    let validationCheck = this.nepSong_srv.validateNepaliSongsData(
      req.body,
      req.file
    );
    if (validationCheck) {
      next({
        status_code: 400,
        msg: validationCheck,
      });
    } else {
      try {
        if (req.file) {
          data.image = req.file.filename;
        }
        let sucess = await this.nepSong_srv.updatenepalisongByid(
          data,
          req.params.id
        );

        res.json({
          result: data,
          status: true,
          msg: "nepali song updated sucessfully",
        });
      } catch (error) {
        next({
          status_code: 500,
          msg: error,
        });
      }
    }
  };

  deleteNepaliSongByid = async (req, res, next) => {
    try {
      let deletedSong = await this.nepSong_srv.deleteNepaliSongByid(
        req.params.id
      );
      if (!deletedSong) {
        res.json({
          result: "no song found to delete",
        });
      }
      res.json({
        result: deletedSong,
        status: true,
        msg: "song deleted sucess",
      });
    } catch (error) {
      next({
        status_code: 400,
        msg: error,
      });
    }
  };
}
module.exports = NepaliSongsController;
