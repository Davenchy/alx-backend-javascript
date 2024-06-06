const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', function () {
  for (let i = 0; i < 26; i++) {
    it('should return 4', function () {
      assert.equal(calculateNumber(1, 3), 4);
    });

    it('should return 5', function () {
      assert.equal(calculateNumber(1, 3.7), 5);
    });

    it('should return 5', function () {
      assert.equal(calculateNumber(1.2, 3.7), 5);
    });

    it('should return 6', function () {
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });

    it('should return 7', function () {
      assert.equal(calculateNumber(1.6, 5.2), 7);
    });
  }
});

