const NepaliSongsModel = require('../models/nepalisongsModel');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const addNepaliSongs = async (req, res) => {
  try {
    // Check if file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    const { songname, singername, musiclabel, releaseddate, lyrics, url } =
      req.body;

    // Validate required fields
    if (
      !songname ||
      !singername ||
      !musiclabel ||
      !releaseddate ||
      !lyrics ||
      !url
    ) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const image = {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    };
    console.log(image);

    // Create Nepali song
    const data = await NepaliSongsModel.create({
      songname,
      singername,
      musiclabel,
      releaseddate,
      lyrics,
      url,
      image,
    });
    console.log(data);

    return res.status(200).json({ message: 'Song added successfully', data });
  } catch (error) {
    console.error('Error adding Nepali song:', error);
    return res
      .status(500)
      .json({ message: 'Unable to add Nepali song', error: error.message });
  }
};

module.exports = {
  uploadSingle: upload.single('image'), // Export the Multer middleware function
  addNepaliSongs: addNepaliSongs, // Export the addNepaliSongs function
};
