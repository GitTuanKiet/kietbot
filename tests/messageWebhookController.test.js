import { expect } from 'chai';
import { messageWebhookController } from '../../src/controllers/messageWebhookController.js';

describe('Unit Tests - messageWebhookController', () => {
  it('should respond with 200 if the request contains a message', () => {
    const req = {
      body: {
        object: 'page',
        entry: [
          {
            messaging: [
              {
                message: {
                  text: 'Test message',
                },
              },
            ],
          },
        ],
      },
    };
    const res = {
      status: (status) => ({
        send: () => {
          expect(status).to.equal(200);
        },
      }),
    };

    messageWebhookController(req, res);
  });

  it('should respond with 404 if the request does not contain a message', () => {
    const req = {
      body: {
        object: 'page',
        entry: [
          {
            // No messaging key
          },
        ],
      },
    };
    const res = {
      status: (status) => ({
        send: () => {
          expect(status).to.equal(404);
        },
      }),
    };

    messageWebhookController(req, res);
  });

});
