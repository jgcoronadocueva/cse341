/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/

/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const app = express();
const env = require("dotenv").config();
const indexRoute = require("./routes/index");

/* ***********************
 * View Engine
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
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
    console.log(`Server is running on ${host}:${port}`);
});