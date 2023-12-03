// test/unit/verifyWebhookController.test.js
import { expect } from 'chai';
import { verifyWebhookController } from '../../src/controllers/verifyWebhookController.js';

describe('Unit Tests - verifyWebhookController', () => {
  it('should respond with challenge if verification is successful', () => {
    const req = {
      query: {
        'hub.mode': 'subscribe',
        'hub.verify_token': 'your_verify_token',
        'hub.challenge': 'test_challenge',
      },
    };
    const res = {
      status: (status) => ({
        send: (message) => {
          expect(status).to.equal(200);
          expect(message).to.equal('test_challenge');
        },
      }),
    };

    verifyWebhookController(req, res);
  });

  it('should respond with 403 if verification fails', () => {
    const req = {
      query: {
        'hub.mode': 'subscribe',
        'hub.verify_token': 'invalid_token',
        'hub.challenge': 'test_challenge',
      },
    };
    const res = {
      status: (status) => ({
        send: (message) => {
          expect(status).to.equal(403);
        },
      }),
    };

    verifyWebhookController(req, res);
  });

});
