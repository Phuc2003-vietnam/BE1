const express = require('express');
const router = express.Router();
const fileUploader = require('../config/cloudinary/cloudinary.config');

router.post('/cloudinary-upload', fileUploader.single('image'), (req, res, next) => {
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
  res.json({ secure_url: req.file.path });
});


module.exports = router;
