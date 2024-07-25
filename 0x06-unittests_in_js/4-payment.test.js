// 4-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;
    let calculateNumberStub;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    });

    afterEach(() => {
        consoleSpy.restore();
        calculateNumberStub.restore();
    });

    it('should call calculateNumber with SUM, 100, 20 and log the total as 10', () => {
        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    });
});
