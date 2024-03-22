const express = require('express');
const nepalisongModel = require('../models/nepalisongsModel');

const searchNepaliSong = async (req, res) => {
  try {
    const searchedSong = await nepalisongModel.find({
      songname: new RegExp(req.params.songname, 'i'),
    });
    // console.log(searchedSong);
    res.status(200).json(searchedSong);
  } catch (error) {
    console.error('searchError', error.message);
    res.status(500).json({ searchError: error.message });
  }
};

module.exports = searchNepaliSong;
