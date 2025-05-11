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

/* ***********************
 * Create a new contact
*************************/
contactsController.createContact = async (req, res) => {
    try {
        console.log(req.body)
        const { firstName, lastName, email, favoriteColor, birthday } = req.body;

        // If one or more of the fields is missing
        if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const id = await contactsModel.createContact(req.app.locals.db, { firstName, lastName, email, favoriteColor, birthday });
        res.status(201).json({ id });
    } catch (error) {
        console.error('Error creating contact:', error);
        res.status(500).json({ error: 'Failed to create contact' });
    }
};

/* ***********************
 * Update an existing contact
*************************/
contactsController.updateContact = async (req, res) => {
    try {
        const contactsUpdated = await contactsModel.updateContact(req.app.locals.db, req.params.id, req.body);
        if (!contactsUpdated) return res.status(404).json({ error: 'Contact not found' });
        res.status(204).json({ message: 'Contact updated successfully' }); // 204 for assignment, 200 for other purposes
    } catch (error) {
        console.error('Error updating contact:', error);
        res.status(500).json({ error: 'Failed to update contact' });
    }
};

/* ***********************
 * Delete a contact
*************************/
contactsController.deleteContact = async (req, res) => {
    try {
        const contactsDeleted = await contactsModel.deleteContact(req.app.locals.db, req.params.id);
        if (!contactsDeleted) return res.status(404).json({ error: 'Contact not found' });
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        console.error('Error deleting contact:', error);
        res.status(500).json({ error: 'Failed to delete contact' });
    }
};

module.exports = contactsController;

