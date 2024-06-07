const assert = require('assert');
const request = require('request');

const PORT = 7865;

describe('Test the index page', () => {
  for (let i = 0; i < 7; i++) {
    it('should be listening on port 7865', (done) => {
      request(`http://localhost:${PORT}`, (err, res) => {
        if (err) {
          throw err;
        } else {
          done();
        }
      });
    });

    it('should return status code 200', (done) => {
      request(`http://localhost:${PORT}`, (err, res) => {
        if (err) {
          throw err;
        } else {
          assert.equal(res.statusCode, 200);
          done();
        }
      });
    });
   
    it('should return correct message', (done) => {
      request(`http://localhost:${PORT}`, (err, res, body) => {
        if (err) {
          throw err;
        } else {
          assert.equal(body, 'Welcome to the payment system');
          done();
        }
      });
    });
  }

  it('should be listening on port 7865', (done) => {
    request(`http://localhost:${PORT}`, (err, res) => {
      if (err) {
        throw err;
      } else {
        done();
      }
    });
  });

  it('should return status code 200', (done) => {
    request(`http://localhost:${PORT}`, (err, res) => {
      if (err) {
        throw err;
      } else {
        assert.equal(res.statusCode, 200);
        done();
      }
    });
  });

});
