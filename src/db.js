// db.js
import mongoose from 'mongoose';
import config from '../config/config.js';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.database.mongouri, {});
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectToDatabase;
