const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const assert = require('assert');

describe('Test Utils#calculateNumber', () => {
  it('should be called with same parameters', () => {
    sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
    assert(Utils.calculateNumber.calledOnce);
    assert(Utils.calculateNumber.calledWith('SUM', 100, 20));
  });
});
