// services/textMessageService.js
import config from '../config.js';
import { getUserCache, setUserCache } from './cacheService.js';
import { sendFacebookMessage } from './facebookService.js';
import { openai } from './openaiService.js';

const sendTextMessage = async (userId, text) => {
  try {
    const checkedTextMessage = await openai(config.text.rule, text);
    const cachedResult = await getUserCache(checkedTextMessage, text);

    if (cachedResult) {
      console.log('Using result from cache:', cachedResult);
      await sendFacebookMessage(userId, cachedResult);
      return;
    }

    const resultFromAPI = await openai(config.text.content, text);

    if (resultFromAPI) {
      setUserCache(checkedTextMessage, text, resultFromAPI);
      console.log('New result from API:', resultFromAPI);
      await sendFacebookMessage(userId, resultFromAPI);
    } else {
      console.error('Error in sendTextMessage:', 'Failed to get result from OpenAI API');
      await sendFacebookMessage(userId, 'Failed to process your request');
    }

  } catch (error) {
    console.error('Error in sendTextMessage:', error);
    await sendFacebookMessage(userId, 'An error occurred while processing your request');
  }
};

export { sendTextMessage };
