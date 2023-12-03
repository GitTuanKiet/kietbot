import express from 'express';
import bodyParser from 'body-parser';
import connectToDatabase from './src/db.js';
import config from './config/config.js';
import webhookRoutes from './routes/webhookRoutes.js';

const app = express();

// Connect to MongoDB
connectToDatabase();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the webhook routes
app.use('/webhook', webhookRoutes);

app.listen(config.app.port, () => {
  console.log(`Express server is listening on port ${config.app.port}`);
});
