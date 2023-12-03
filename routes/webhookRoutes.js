// webhookRoutes.js
import express from 'express';
import verifyWebhookController from '../src/controllers/verifyWebhookController.js';
import messageWebhookController from '../src/controllers/messageWebhookController.js';

const webhookRoutes = express.Router();


webhookRoutes.get('/', verifyWebhookController);
webhookRoutes.post('/', messageWebhookController);

export default webhookRoutes;
