// controllers/contactsController.js
const Contact = require('../models/Contact');

const contactsController = {};

 // Retrieve all contacts
contactsController.getContacts = async function (req, res) {
  try {
   
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

 // Retrieve a contacts by ID
contactsController.getContactById = async function (req, res) {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json(contact);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Invalid ID format" });
  }
};

module.exports = contactsController;