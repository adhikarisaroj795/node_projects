const express = require('express');
const nepalisongModel = require('../models/nepalisongsModel');

const deleteNepaliSong = async (req, res) => {
  try {
    const result = await nepalisongModel.findByIdAndDelete(req.params.id);
    if (result) {
      res.status(200).json({ messsage: 'song deleted', result });
    } else {
      res.status(404).json({ message: 'song not found' });
    }
  } catch (error) {
    console.log('error from delete : ', error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteNepaliSong;
