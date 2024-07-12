const multer = require("multer");
const path = require("path");

const myStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath = path.join(process.cwd(), "uploads");
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    let fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName);
  },
});

const videoFilter = (req, file, cb) => {
  const allowedFormats = ["mp4", "avi", "mkv", "mov"];
  let ext = file.originalname.split(".").pop().toLowerCase();

  if (allowedFormats.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only video files are allowed."), false);
  }
};

const uploader = multer({
  storage: myStorage,
  fileFilter: videoFilter,
});

module.exports = uploader;
