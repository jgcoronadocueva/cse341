const mongoClient = require('mongodb').MongoClient;
const env = require("dotenv").config();

const mongoURL = process.env.DATABASE_URI;

let _db //For internal use only

const initDb = callback => {
    if (_db) {
        console.log('Db is already initialized!');
        return callback(null, _db);
    }

    // Adding options for TLS validation if necessary
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        tls: true,
        tlsAllowInvalidCertificates: true, // For debugging, remove in production
    }

    mongoClient.connect(mongoURL, options)
        .then(client => {
            _db = client.db('appDatabase');
            callback(null, _db);
        })
        .catch(err => {
            callback(err);
        });
};

const getDb = () => {
    if (!_db) {
        throw Error('Db not initialized');
    }
    return _db;
};

module.exports = {
    initDb,
    getDb
};