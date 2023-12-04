import mongoose from 'mongoose';

const cacheSchema = new mongoose.Schema({
  userId:String,
  prompt:[
    {
      text: String,
      result: String,
    },
  ],
});

const CacheModel = mongoose.model('Cache', cacheSchema);

export default CacheModel;
