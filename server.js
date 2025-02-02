/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/

/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const env = require("dotenv").config();
const mongodb = require('./database/mongodb');
const bodyParser = require("body-parser")
const app = express();
const indexRoute = require("./routes");

/* ***********************
 * Middleware
 * ************************/
app.use(bodyParser.json())

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
mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log('Error connecting to MongoDB:', err);
    } else {
        app.locals.db = mongodb;
        console.log('Successfully connected to MongoDB');
        app.listen(port || 3000, () => {
            console.log(`Server is running on ${host}:${port}`);
        });
    }
});

