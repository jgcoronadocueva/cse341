const express = require('express')
const router = express.Router();
const contactsController = require('../controllers/contactsController');

/* ROUTES TO CONTROLLERS TO PERFORM CRUD OPERATIONS IN DATABASE */

// Get all contacts
router.get('/', contactsController.getAllContacts);

// Get a single contact by ID
router.get('/:id', contactsController.getContactById);

// Create a new contact
router.post('/', contactsController.createContact);

// Update a contact information by ID
router.put('/:id', contactsController.updateContact);

// Delete a single contact by ID
router.delete('/:id', contactsController.deleteContact);

module.exports = router;