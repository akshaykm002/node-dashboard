const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const MONGO_URI = process.env.MONGO_URI; 

const connectDB = async () => {
    try {
      await mongoose.connect(MONGO_URI);
      console.log("MongoDB Connected: " + MONGO_URI);
    } catch (err) {
      console.error("Error connecting to MongoDB:", err.message);
      process.exit(1);
    }
  };

module.exports = connectDB;
