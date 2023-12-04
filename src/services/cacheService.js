import CacheModel from '../models/cacheModel.js';

const getUserCache = async (text) => {
  try {
    const cache = await CacheModel.findOne({'prompt.text': text}).exec();
    if (cache && cache.prompt.length > 0) {
      const matchingPrompt = cache.prompt.find(prompt => prompt.text === text);
      return matchingPrompt.result;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error querying cache:', error);
    return null;
  }
};

const setUserCache = async (userId, text, result) => {
  try {
    const existingCache = await CacheModel.findOne({userId: userId}).exec();

    if (existingCache) {
      existingCache.prompt.push({ text, result });
      await existingCache.save();
      console.log('Updated result in the database');
    } else {
      const newCache = new CacheModel({
        userId: userId,
        prompt: { text, result },
      });
      await newCache.save();
      console.log('Saved result to the database');
    }
  } catch (error) {
    console.error('Error checking and saving cache:', error);
  }
};
export { getUserCache, setUserCache };
