const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('test getPaymentTokenFromAPI', () => {
  it('Async testing', (done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      assert(res.data !== undefined);
      done();
    });
  });
});
