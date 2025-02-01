const express = require('express');
const router = express.Router();
const baseController = require('../controllers/baseController');

// Route to display the name
router.get('/', baseController.buildHome);
router.use('/contacts', require('./contactsRoute'));

module.exports = router;