// routes/index.js
const express = require("express");
const router = express.Router();

const baseController = require("../controllers/baseController");
const contactsRoutes = require("./contactsRoutes");
const swaggerRoutes = require("./swaggerRoutes");

// API Routes
router.get("/", baseController.getHome);
router.use("/contacts", contactsRoutes);
router.use("/api-docs", swaggerRoutes);

module.exports = router;