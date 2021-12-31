const multer = require('multer');
const path = require('path');

module.exports = (multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/voluntariado')
    },
    filename: (req, file, cb) => {
      cb(null, Date.now().toString() + '_' + file.originalname)
    }
  }),
  fileFilter: (req, file, cb) => {
    const filetypes = /pdf|jpeg|jpg|JPG|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb("Error: Archivo no válido");
  }
}))