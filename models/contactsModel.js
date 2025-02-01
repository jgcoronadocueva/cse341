const { ObjectId } = require('mongodb');

class contactsModel {
    static collection(db) {
        return db.collection('contacts');
    }

    // Get all contacts
    static async getAllContacts(db) {
        const collection = contactsModel.collection(db);
        return await collection.find().toArray();
    }

    // Get a contact by ID
    static async getContactById(db, id) {
        const collection = contactsModel.collection(db);
        return await collection.findOne({ _id: new ObjectId(id) });
    }

    // Create a new contact
    static async createContact(db, contactData) {
        const collection = contactsModel.collection(db);
        const result = await collection.insertOne(contactData);
        return result.insertedId;
    }

    // Update an existing contact
    static async updateContact(db, id, updateData) {
        const collection = contactsModel.collection(db);
        const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });
        return result.modifiedCount;
    }

    // Delete a contact
    static async deleteContact(db, id) {
        const collection = contactsModel.collection(db);
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        return result.deletedCount;
    }
};

module.exports = contactsModel;