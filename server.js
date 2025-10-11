// server.js
const express = require('express');
const cors = require ('cors');
const connectDB = require('./config/db');

const app = express();

// Set EJS as the template engine
app.set("view engine", "ejs");

// Set the folder where templates are stored
app.set("views", "./views");

// Needed to parse JSON requests
app.use(express.json());

// Hub for all routes
const index = require("./routes");
app.use("/", index);

// Connect DB and start server
connectDB().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
  });
});