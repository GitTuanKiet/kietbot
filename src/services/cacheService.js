// cacheService.js
import CacheModel from '../models/cacheModel.js';

const getUserCache = async (prompt, text) => {
  try {
    const cache = await CacheModel.findOne({
      prompt: prompt,
      'results.text': text,
    }).exec();

    if (cache && cache.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * cache.results.length);
      const randomResult = cache.results[randomIndex].result;
      return randomResult;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error querying cache:', error);
    return null;
  }
};

const setUserCache = async (prompt, text, result) => {
  try {
    const existingCache = await CacheModel.findOne({
      prompt: prompt,
    }).exec();

    if (existingCache) {
      existingCache.results.push({ text, result });
      await existingCache.save();
      console.log('Updated result in the database');
    } else {
      const newCache = new CacheModel({
        prompt: prompt,
        results: { text, result },
      });
      await newCache.save();
      console.log('Saved result to the database');
    }
  } catch (error) {
    console.error('Error checking and saving cache:', error);
  }
};

export { getUserCache, setUserCache };
