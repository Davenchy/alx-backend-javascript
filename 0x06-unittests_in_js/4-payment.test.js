const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const assert = require('assert');

describe('Test Utils#calculateNumber', () => {
  it('should be called with same parameters', () => {
    const log = sinon.spy(console, 'log');
    const calc = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);

    assert(calc.calledOnce);
    assert(calc.calledWith('SUM', 100, 20));

    assert(log.calledOnce);
    assert(log.calledWith('The total is: 10'));
  });
});
