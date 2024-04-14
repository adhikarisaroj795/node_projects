const multer = require("multer");
const mutler = require("multer");

const myStorage = mutler.diskStorage({
  destination: (req, file, cb) => {
    let path = process.cwd() + "/uploads";
    cb(null, path);
  },
  filename: (req, file, cb) => {
    let f_name = Date.now() + "-" + file.originalname;
    cb(null, f_name);
  },
});

const imageFilter = (req, file, cb) => {
  let allowded = ["jpg", "jpeg", "png", "webp"];
  let ext = file.originalname.split(".");
  ext = ext[ext.length - 1];
  if (allowded.includes(ext)) {
    cb(null, true);
  } else {
    cb(true, false);
  }
};

const uploader = multer({
  storage: myStorage,
  fileFilter: imageFilter,
});

module.exports = uploader;
