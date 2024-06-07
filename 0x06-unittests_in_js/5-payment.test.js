const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const assert = require('assert');

let log;

beforeEach(() => {
  log = sinon.spy(console, 'log');
});

afterEach(() => {
  sinon.restore();
});

describe('Test Utils#calculateNumber', () => {
  it('should be called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    assert(log.calledOnce);
    assert(log.calledWith('The total is: 120'));
  });
  it('should be called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    assert(log.calledOnce);
    assert(log.calledWith('The total is: 20'));
  });
});
