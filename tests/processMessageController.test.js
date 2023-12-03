// test/unit/processMessageController.test.js
import { expect } from 'chai';
import { processMessageController } from '../../src/controllers/processMessageController.js';
import { textMessage } from '../../src/services/textService.js';

describe('Unit Tests - processMessageController', () => {
  it('should call sendTextMessage with the correct parameters', async () => {
    const userId = 'test_user_id';
    const message = 'Test message';
    const req = {
      sender: {
        id: userId,
      },
      message: {
        text: message,
      },
    };

    // Mock sendTextMessage function
    const textMessageMock = sinon.stub(textMessage);
    textMessageMock.resolves();

    await processMessageController(req);

    // Verify that sendTextMessage was called with the correct parameters
    expect(textMessageMock.calledWith(userId, message)).to.be.true;
  });

});
