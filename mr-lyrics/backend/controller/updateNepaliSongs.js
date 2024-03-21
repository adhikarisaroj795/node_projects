const express = require('express');
const nepalisongModel = require('../models/nepalisongsModel');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const updateNepaliSong = async (req, res) => {
  try {
    // if (!req.body) {
    //   res.status(500).json({ msg: 'data hal jimu' });
    // }
    // Check if file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ msg: 'No update data provided' });
    }
    const image = {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    };

    // console.log('update body:', req.body);
    const { songname, singername, musiclabel, releaseddate, lyrics, url } =
      req.body;
    const updatedUser = await nepalisongModel.findByIdAndUpdate(
      req.params.id,
      {
        songname,
        singername,
        musiclabel,
        releaseddate,
        lyrics,
        url,
        image,
      },
      { new: true }
    );
    // console.log(updatedUser);
    if (!updatedUser) {
      res.status(404).json({ message: 'update failed song not found' });
    }
    res.status(200).json({ message: 'song updated sucessfully' });
  } catch (error) {
    console.log('error in update: ', error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  uploadSingle: upload.single('image'),
  updateNepaliSong: updateNepaliSong,
};
