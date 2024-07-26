const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  let server;

  before((done) => {
    server = require('./api'); // Ensure the server is running
    done();
  });

  after((done) => {
    server.close(done); // Close server after tests
  });

  it('check correct status code', (done) => {
    request.get('http://localhost:7865', (error, response) => {
      if (error) {
        return done(error);
      }
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('check correct content', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      if (error) {
        return done(error);
      }
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('check correct content length', (done) => {
    request.get('http://localhost:7865', (error, response) => {
      if (error) {
        return done(error);
      }
      expect(response.headers['content-length']).to.equal('30'); // Length of "Welcome to the payment system"
      done();
    });
  });
});
