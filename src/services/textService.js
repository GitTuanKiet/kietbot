import config from '../../config/config.js';
import { getUserCache, setUserCache } from './cacheService.js';
import { sendFacebookMessage } from './facebookService.js';
import { openai } from './openaiService.js';
import checkText from '../../utils/helper.js';

const textMessage = async (userId, text) => {
  try {
    if(checkText(text) === null) return sendFacebookMessage(userId, 'The language is not currently supported');
    const cachedResult = await getUserCache(text);

    if (cachedResult) {
      console.log('Using result from cache:', cachedResult);
      await sendFacebookMessage(userId, cachedResult);
      return;
    } else {
    const result = await openai(config.text.content, text);
    
    if (result) {
      setUserCache(userId, text, result);
      console.log('New result from API:', result);
      await sendFacebookMessage(userId, result);
    } else {
      await sendFacebookMessage(userId, 'Not knowing :)');
    }
  }

  } catch (error) {
    console.error('Error in TextMessage:', error);
    await sendFacebookMessage(userId, 'I am offline :(');
  }
};

export default textMessage ;
