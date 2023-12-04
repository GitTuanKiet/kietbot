import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

export default {
  app: {
    port: process.env.APP_PORT || 9999,
    verifyToken: process.env.VERIFY_TOKEN || 'your_verifyToken',
  },
  facebook: {
    accessToken: process.env.FACEBOOK_ACCESS_TOKEN || 'your_facebook_access_token',
  },
  openai: {
    apiKey: process.env.CHATGPT_API_KEY || 'your_openai_api_key',
    endpoint: process.env.YOUR_CHATGPT_ENDPOINT || 'https://api.openai.com/v1/chat/completions',
  },
  database:{
    mongouri:process.env.MONGO_URI || 'your_mongo_uri',
},
  text:{
    rule:process.env.RULE || 'Bạn là ChatBot .',
    content:process.env.CONTENT || 'Bạn là ChatBot .',
  },

};