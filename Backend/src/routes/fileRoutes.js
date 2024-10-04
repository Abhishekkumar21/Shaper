const express = require("express");
const uploadFileController = require("../controllers/fileUploadController");
const multer = require("multer");
const config = require("../config/config");

const router = express.Router();

//store file to destination and name the file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// intialize multer middleware
const upload = multer({ storage });

router.post("/upload", upload.single("file"), uploadFileController);

module.exports = router;
