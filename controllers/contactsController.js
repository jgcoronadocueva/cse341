const contactsController = {};
const contactsModel = require('../models/contactsModel');

/* ***********************
 * Retrieve all contacts from the database
*************************/
contactsController.getAllContacts = async function (req, res) {
    try {
        const contacts = await contactsModel.getAllContacts(req.app.locals.db);
        res.status(200).json(contacts);
    } catch (error) {
        console.error('Error retrieving contacts:', error);
        res.status(500).json({ error: 'Failed to retrieve contacts' });
    }
};

/* ***********************
 * Retrieve a contact by ID
*************************/
contactsController.getContactById = async function (req, res) {
    try {
        const contact = await contactsModel.getContactById(req.app.locals.db, req.params.id);

        // If contact is not found
        if (!contact) return res.status(404).json({ error: 'Contact not found' });

        res.json(contact);

    } catch (error) {
        console.error('Error getting contact by ID:', error);
        res.status(500).send('Failed to get the contact');
    }
}

module.exports = contactsController;

