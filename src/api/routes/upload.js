const express = require('express');
const uploadRouter = express.Router();
const fileUploader = require('../config/cloudinary/cloudinary.config');
var filePath

uploadRouter.post('/cloudinary-upload', fileUploader.single('image'), (req, res, next) => {
  const shoeName = req.body.shoeName;
  const price = req.body.price;
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
  filePath=req.file.path

  
  res.json({ secure_url: req.file.path });
});


module.exports = {uploadRouter,filePath}
