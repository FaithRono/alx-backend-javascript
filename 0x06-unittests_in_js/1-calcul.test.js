// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    describe('SUM', function() {
        it('should return 6 when input is (1.4, 4.5)', function() {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return 0 when input is (-1.4, 1.4)', function() {
            assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
        });
    });

    describe('SUBTRACT', function() {
        it('should return -4 when input is (1.4, 4.5)', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it('should return -2 when input is (2.5, 5.3)', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 5.3), -2);
        });
    });

    describe('DIVIDE', function() {
        it('should return 0.2 when input is (1.4, 4.5)', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" when input is (1.4, 0)', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });

        it('should return "Error" when input is (1.4, 0.4)', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
        });
    });

    it('should throw an error for an invalid operation type', function() {
        assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), /Invalid operation type/);
    });
});
