import fetch from 'node-fetch';
import config from '../../config/config.js';

const openai = async (content, text) => {
  try {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${config.openai.apiKey}`);

    const response = await fetch(config.openai.endpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        messages: [
          { role: "system", content: content },
          { role: "user", content: text },
        ],
        model: "gpt-3.5-turbo",
      }),
    });

    if (response.ok) {
      const result = await response.json();

      if (result && result.error) {
        console.error('Error from OpenAI:', result.error.message);
        return null;
      }

      console.log('Result from OpenAI:', result.choices[0].message.content);
      return result.choices[0].message.content;
    } else {
      console.error('Error in openai:', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Error in openai:', error);
    return null;
  }
};

export { openai };
