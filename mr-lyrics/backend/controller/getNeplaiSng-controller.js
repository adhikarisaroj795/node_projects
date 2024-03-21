const nepalisongModel = require('../models/nepalisongsModel');

const nepaliSongs = async (req, res) => {
  try {
    const response = await nepalisongModel.find();
    if (!response) {
      res.status(404).json({ msg: 'no nepali song found' });
      return;
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log('getSongError', error.message);
  }
};

module.exports = nepaliSongs;
