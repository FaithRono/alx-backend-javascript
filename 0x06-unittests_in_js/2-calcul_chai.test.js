// 2-calcul_chai.test.js
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
    describe('SUM', function() {
        it('should return 6 when input is (1.4, 4.5)', function() {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });

        it('should return 0 when input is (-1.4, 1.4)', function() {
            expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
        });
    });

    describe('SUBTRACT', function() {
        it('should return -4 when input is (1.4, 4.5)', function() {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });

        it('should return -2 when input is (2.5, 5.3)', function() {
            expect(calculateNumber('SUBTRACT', 2.5, 5.3)).to.equal(-2);
        });
    });

    describe('DIVIDE', function() {
        it('should return 0.2 when input is (1.4, 4.5)', function() {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return "Error" when input is (1.4, 0)', function() {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });

        it('should return "Error" when input is (1.4, 0.4)', function() {
            expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
        });
    });

    it('should throw an error for an invalid operation type', function() {
        expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw('Invalid operation type');
    });
});
