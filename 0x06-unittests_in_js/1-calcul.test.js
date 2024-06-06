const calc = require('./1-calcul.js');
const assert = require('assert');

describe('Test with type equal to SUM', function() {
  const type = 'SUM';

  it('should return 5', function() {
    assert.equal(calc(1, 4, type), 5);
  });

  it('should return 5', function() {
    assert.equal(calc(1.2, 4, type), 5);
  });

  it('should return 5', function() {
    assert.equal(calc(1.2, 4.3, type), 5);
  });

  it('should return 6', function() {
    assert.equal(calc(1.5, 4.3, type), 6);
  });

  it('should return 7', function() {
    assert.equal(calc(1.5, 4.8, type), 7);
  });

  it('should return -2', function() {
    assert.equal(calc(3.2, -4.8, type), -2);
  });

  it('should return 0', function() {
    assert.equal(calc(0.2, -0.3, type), 0);
  });
});

describe('Test with type equal to SUBTRACT', function() {
  const type = 'SUBTRACT';

  it('should return 3', function() {
    assert.equal(calc(1, 4, type), 3);
  });

  it('should return 3', function() {
    assert.equal(calc(1.2, 4, type), 3);
  });

  it('should return 3', function() {
    assert.equal(calc(1.2, 4.3, type), 3);
  });

  it('should return 2', function() {
    assert.equal(calc(1.5, 4.3, type), 2);
  });

  it('should return 3', function() {
    assert.equal(calc(1.5, 4.8, type), 3);
  });

  it('should return -8', function() {
    assert.equal(calc(3.2, -4.8, type), -8);
  });

  it('should return 0', function() {
    assert.equal(calc(0.2, -0.3, type), 0);
  });
});

describe('Test with type equal to DIVIDE', function() {
  const type = 'DIVIDE';

  it('should return 2', function() {
    assert.equal(calc(8, 4, type), 2);
  });

  it('should return 2', function() {
    assert.equal(calc(8.2, 4, type), 2);
  });

  it('should return 2', function() {
    assert.equal(calc(8.2, 4.3, type), 2);
  });

  it('should return 1', function() {
    assert.equal(calc(3.5, 4.3, type), 1);
  });

  it('should return 0.4', function() {
    assert.equal(calc(1.5, 4.8, type), 0.4);
  });

  it('should return -0.6', function() {
    assert.equal(calc(3.2, -4.8, type), -0.6);
  });

  it('should return 0', function() {
    assert.equal(calc(0.2, -1.3, type), 0);
  });

  it('should return Error', function() {
    assert.equal(calc(0.2, -0.3, type), 'Error');
  });
});
