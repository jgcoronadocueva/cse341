// routes/index.js
const express = require("express");
const router = express.Router();

const baseController = require("../controllers/baseController")

// Define home route
router.get("/", baseController.getHome);

module.exports = router;