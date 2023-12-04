import processMessageController from './processMessageController.js';

const messageWebhookController = async (req, res) => {
  try {
    const body = req.body;
    if (body.object === 'page') {
      for (const entry of body.entry) {
        for (const event of entry.messaging) {
          if (event.message) {
            await processMessageController(event);
          }
        }
      }
      res.status(200).send('EVENT_RECEIVED');
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error('Error in messageWebhookController:', error);
    res.sendStatus(500);
  }
};

export default messageWebhookController;
