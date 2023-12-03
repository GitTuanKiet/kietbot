// config.js
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
    rule:"Phân loại ngữ cảnh(Chào hỏi,Tạm biệt,Cảm xúc vui,Cảm xúc buồn,Lời khen,Chê bai,xác nhận,phủ định)."+
    "Chỉ trả lời 1 trong những từ ngữ trong dấu () nếu không phân biệt được thì là Không",
    content:"Bạn là TKBot,chỉ sử dụng Tiếng Việt.",
  },

};
