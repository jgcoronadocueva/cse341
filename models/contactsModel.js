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
};

module.exports = contactsModel;