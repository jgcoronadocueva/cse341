/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/

/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const cors = require("cors");
const database = require('./database/connect');
const bodyParser = require("body-parser");
const indexRoute = require("./routes");
const app = express();
require("dotenv").config();


/* ***********************
 * Middleware
 * ************************/
app.use(bodyParser.json())
app.use(cors({ origin: '*' }));

/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs")

/* ***********************
 * Routes
 *************************/
app.use('/', indexRoute); // Home route

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST

/* ***********************
 * Log statement to confirm connection to database
 * and server operation.
 *************************/
database.initDb((err, dbInstance) => {
  if (err) {
    console.log('Error connecting to MongoDB:', err);
  } else {
    app.locals.db = dbInstance;
    console.log('Successfully connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on ${host}:${port}`);
    });
  }
});