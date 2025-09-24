// routes/index.js
const express = require("express");
const router = express.Router();

const baseController = require("../controllers/baseController");
const contactsRoutes = require("./contactsRoutes");

// API Routes
router.get("/", baseController.getHome);
router.use("/contacts", contactsRoutes);

module.exports = router;