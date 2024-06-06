const calc = require('./1-calcul.js');
const assert = require('assert');

describe('Test with type equal to SUM', function() {
  const type = 'SUM';

  it('should return 6', function() {
    assert.equal(calc(type, 1.4, 4.5), 6);
  })

  it('should return 5', function() {
    assert.equal(calc(type, 1, 4), 5);
  })

  it('should return 5', function() {
    assert.equal(calc(type, 1.2, 4), 5);
  });

  it('should return 5', function() {
    assert.equal(calc(type, 1.2, 4.3), 5);
  });

  it('should return 6', function() {
    assert.equal(calc(type, 1.5, 4.3), 6);
  });

  it('should return 7', function() {
    assert.equal(calc(type, 1.5, 4.8), 7);
  });

  it('should return -2', function() {
    assert.equal(calc(type, 3.2, -4.8), -2);
  });

  it('should return 0', function() {
    assert.equal(calc(type, 0.2, -0.3), 0);
  });
});

describe('Test with type equal to SUBTRACT', function() {
  const type = 'SUBTRACT';

  it('should return -4', function() {
    assert.equal(calc(type, 1.4, 4.5), -4);
  })

  it('should return -3', function() {
    assert.equal(calc(type, 1, 4), -3);
  });

  it('should return -3', function() {
    assert.equal(calc(type, 1.2, 4), -3);
  });

  it('should return -3', function() {
    assert.equal(calc(type, 1.2, 4.3), -3);
  });

  it('should return -2', function() {
    assert.equal(calc(type, 1.5, 4.3), -2);
  });

  it('should return -3', function() {
    assert.equal(calc(type, 1.5, 4.8), -3);
  });

  it('should return 8', function() {
    assert.equal(calc(type, 3.2, -4.8), 8);
  });

  it('should return 0', function() {
    assert.equal(calc(type, 0.2, -0.3), 0);
  });
});

describe('Test with type equal to DIVIDE', function() {
  const type = 'DIVIDE';

  it('should return 0.2', function() {
    assert.equal(calc(type, 1.4, 4.5), 0.2);
  })

  it('should return 2', function() {
    assert.equal(calc(type, 8, 4), 2);
  });

  it('should return 2', function() {
    assert.equal(calc(type, 8.2, 4), 2);
  });

  it('should return 2', function() {
    assert.equal(calc(type, 8.2, 4.3), 2);
  });

  it('should return 1', function() {
    assert.equal(calc(type, 3.5, 4.3), 1);
  });

  it('should return 0.4', function() {
    assert.equal(calc(type, 1.5, 4.8), 0.4);
  });

  it('should return -0.6', function() {
    assert.equal(calc(type, 3.2, -4.8), -0.6);
  });

  it('should return 0', function() {
    assert.equal(calc(type, 0.2, -1.3), 0);
  });

  it('should return Error', function() {
    assert.equal(calc(type, 0.2, -0.3), 'Error');
  });

  it('should return Error', function() {
    assert.equal(calc(type, 1.4, 0), 'Error');
  })
});
