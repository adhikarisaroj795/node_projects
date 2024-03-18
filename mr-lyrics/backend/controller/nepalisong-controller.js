const NepaliSongsModel = require('../models/nepalisongsModel');

const addNepaliSongs = async (req, res) => {
  try {
    const response = req.body;
    console.log(response);
    const data = await NepaliSongsModel.create(response);
    return res.status(200).json({ message: 'Song added sucessfully' });
  } catch (error) {
    return res.status(500).json({ message: 'unable to add nepali songs' });
  }
};

module.exports = addNepaliSongs;
