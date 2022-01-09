const multer = require("multer");
const path = require("path");

module.exports = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./tmp");
    },
    filename: (req, file, cb) => {
      cb(null, '/' + Date.now().toString() + "_" + file.originalname);
    },
  }),
  limits: {
    fileSize: 1024 * 1024 * 5, 
  },
  // fileFilter: (req, file, cb) => {
  //   if (
  //     file.mimetype === "image/png" || 'image/jpg' || 'image/jpeg' || 'image/gif'
  //   ) {
  //     cb(null, true);
  //   } else {
  //     cb(null, false);
  //   }
  // }
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|JPG|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb("Error: Archivo no válido");
  },
});
