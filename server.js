// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Hub for all routes
const index = require("./routes");
app.use("/", index);

// Connect DB and start server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});