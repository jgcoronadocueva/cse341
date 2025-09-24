const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Database connected');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1); // terminates the server
  }
};

module.exports = connectDB;