const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: "No file uploaded." });
  }

  const filePath = req.file.path;
  console.log(`File uploaded successfully: ${filePath}`);

  return res.json({
    success: true,
    message: "File uploaded successfully.",
    filePath: filePath,
  });
};

module.exports = uploadFile;
