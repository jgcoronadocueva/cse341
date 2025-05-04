const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

let _db;

const initDb = (callback) => {
    if (_db) {
        console.log('DB is already initialized.');
        return callback(null, _db);
    }

    const uri = process.env.MONGODB_URI;

    const client = new MongoClient(uri);
    client.connect()
        .then(() => {
            _db = client.db(); // <-- THIS is the database instance (not the client)
            console.log('Connected to MongoDB');
            callback(null, _db);
        })
        .catch(err => {
            console.error('MongoDB connection error:', err);
            callback(err);
        });
};

const getDb = () => {
    if (!_db) throw Error('DB not initialized');
    return _db;
};

module.exports = { initDb, getDb };