// controllers/contactsController.js
const Contact = require("../models/Contact");
const contactsController = {};

/* ***********************
 * Get all contacts
 *************************/
contactsController.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

/* ***********************
 * Get a contact by ID
 *************************/
contactsController.getContactById = async (req, res) => {
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

/* ***********************
 * Create a new contact
 *************************/
contactsController.createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    const contact = await Contact.create({
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday,
    });
    await contact.save();
    console.log("Sending response:", {
      message: "Contact created successfully",
      contactId: contact._id,
      contact,
    });
    res.status(201).json({
      message: "Contact created successfully",
      contactId: contact._id,
      contact,
    });
  } catch (err) {
    console.error(err);

    // Handle Mongoose validation errors
    if (err.name === "ValidationError") {
      const errors = Object.keys(err.errors).map(
        (field) => `\`${field}\` is required.`
      );
      return res
        .status(400)
        .json({ error: "Missing required fields", details: errors });
    }

    // Generic server error
    res.status(500).json({ error: "Failed to create contact" });
  }
};

/* ***********************
 * Update an existing contact by ID
 *************************/
contactsController.updateContact = async (req, res) => {
  try {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, email, favoriteColor, birthday },
      { new: true, runValidators: true }
    );
    if (!contact) return res.status(404).json({ error: "Contact not found" });

    res.status(204).json({ message: "Contact updated successfully" });
  } catch (err) {
    console.error(err);

    // Handle Mongoose validation errors
    if (err.name === "ValidationError") {
      const errors = Object.keys(err.errors).map(
        (field) => `\`${field}\` is required.`
      );

      return res
        .status(400)
        .json({ error: "Missing required fields", details: errors });
    }

    // Generic server error
    res.status(500).json({ error: "Failed to update contact" });
  }
};

/* ***********************
 * Delete a contact by ID
 *************************/
contactsController.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) return res.status(404).json({ error: "Contact not found" });

    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete contact" });
  }
};

module.exports = contactsController;
