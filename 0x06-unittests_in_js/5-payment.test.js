// 5-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleSpy.restore();
    });

    it('should log the total as 120 when called with 100 and 20', () => {
        sinon.stub(Utils, 'calculateNumber').returns(120);
        sendPaymentRequestToApi(100, 20);

        expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
        Utils.calculateNumber.restore(); // Restore the original method
    });

    it('should log the total as 20 when called with 10 and 10', () => {
        sinon.stub(Utils, 'calculateNumber').returns(20);
        sendPaymentRequestToApi(10, 10);

        expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
        Utils.calculateNumber.restore(); // Restore the original method
    });
});
