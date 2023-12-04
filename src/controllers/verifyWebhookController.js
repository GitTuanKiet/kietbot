import config from '../../config/config.js';

const verifyWebhookController = (req, res) => {
  const VERIFY_TOKEN = config.app.verifyToken; // Add config.app.verifyToken to config.js if needed
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
};

export default verifyWebhookController;
