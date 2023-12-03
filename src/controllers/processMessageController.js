// controllers/processMessageController.js
import textService from '../services/textService.js';

const processMessageController = async (event) => {
  try {
    const userId = event.sender.id;
    const message = event.message.text;

    console.log('User ID:', userId);
    console.log('Received Message:', message);

    await textService(userId, message);
  } catch (err) {
    console.error('Error:', err);
  }
};

export default processMessageController;
