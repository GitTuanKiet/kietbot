// models/cacheModel.js
import mongoose from 'mongoose';

const cacheSchema = new mongoose.Schema({
  prompt: String,
  results: [
    {
      text: String,
      result: String,
    },
  ],
});

const CacheModel = mongoose.model('Cache', cacheSchema);

export default CacheModel;
