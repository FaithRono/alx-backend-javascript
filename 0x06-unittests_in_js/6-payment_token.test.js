// 6-payment_token.test.js
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should return a successful response when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.deep.equal({ data: 'Successful response from the API' });
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    it('should not return a response when success is false', (done) => {
        getPaymentTokenFromAPI(false)
            .then(() => {
                // If the promise resolves, fail the test as it should not have resolved
                done(new Error('Expected promise to be rejected'));
            })
            .catch(() => {
                // Expect rejection, so test passes
                done();
            });
    });
});
