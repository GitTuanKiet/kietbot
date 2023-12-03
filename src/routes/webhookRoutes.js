// webhookRoutes.js
import express from 'express';
import verifyWebhookController from '../controllers/verifyWebhookController.js';
import messageWebhookController from '../controllers/messageWebhookController.js';

const router = express.Router();


router.get('/', verifyWebhookController);
router.post('/', messageWebhookController);

export default router;
