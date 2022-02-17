const multer = require("multer");
const path = require("path");

module.exports = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/imprensa");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now().toString() + "_" + file.originalname);
    },
  }),
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "application/pdf" || file.mimetype === "image/jpg" || file.mimetype === "image/png" || file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
});
