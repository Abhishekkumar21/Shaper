const express = require("express");
const errorHandler = require("./middlewares/errorHandlerMiddleware.js");
const fileRoutes = require("./routes/fileRoutes.js");

const app = express();

//middleware to parse JSON
app.use(express.json());

//routes
app.use(fileRoutes);

//error handling middleware
app.use(errorHandler);

module.exports = app;
