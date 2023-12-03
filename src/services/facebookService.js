// facebookService.js
import fetch from 'node-fetch';
import config from '../../config/config.js';

const sendFacebookMessage = async (userId, text) => {
  try {
    const response = await fetch(
      `https://graph.facebook.com/v2.6/me/messages?access_token=${config.facebook.accessToken}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          messaging_type: 'RESPONSE',
          recipient: {
            id: userId,
          },
          message: {
            text,
          },
        }),
      }
    );

    if (!response.ok) {
      console.error('Error in sendFacebookMessage:', response.statusText);
    }
  } catch (error) {
    console.error('Error in sendFacebookMessage:', error);
  }
};

export { sendFacebookMessage };
