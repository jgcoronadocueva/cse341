const express = require('express')
const router = express.Router();
const contactsController = require('../controllers/contactsController');

/* ROUTES TO CONTROLLERS TO PERFORM CRUD OPERATIONS IN DATABASE */

// Get all contacts
router.get('/', contactsController.getAllContacts);

// Get a single contact by ID
router.get('/:id', contactsController.getContactById);

module.exports = router;