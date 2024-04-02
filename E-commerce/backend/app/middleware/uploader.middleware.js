const multer = require("multer");

const myStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let path = process.cwd() + "/uploads";
    cb(null, path);
  },
  filename: (req, file, cb) => {
    //a.jpg, 123-a.jpg
    let f_name = Date.now() + "-" + file.originalname;
    cb(null, f_name);
  },
});

const imageFilter = (req, file, cb) => {
  let allowed = ["jpg", "jpeg", "png", "webp", "svg"];
  let ext = file.originalname.split(".");
  ext = ext[ext.length - 1];
  if (allowed.includes(ext)) {
    cb(null, true);
  } else {
    cb(true, false);
  }
};

const uploder = multer({
  storage: myStorage,
  fileFilter: imageFilter,
});

module.exports = uploder;
