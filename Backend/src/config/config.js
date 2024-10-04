const path = require("path");

const config = {
  uploadsDir: path.join(__dirname, "..", "uploads"), // Go one directory up to reach 'uploads'
};

module.exports = config;
