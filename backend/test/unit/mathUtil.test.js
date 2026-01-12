const MathUtil = require('../../src/utils/MathUtil');

describe('MathUtil', () => {

    describe('add()', () => {
        it('should correctly add two numbers', () => {
            expect(MathUtil.add(2, 3)).toBe(5);
        });

        it('should throw error for invalid inputs', () => {
            expect(() => MathUtil.add(2, "x")).toThrow("Inputs must be numbers");
        });
    });

    describe('subtract()', () => {
        it('should subtract numbers', () => {
            expect(MathUtil.subtract(10, 4)).toBe(6);
        });
    });

    describe('multiply()', () => {
        it('should multiply numbers', () => {
            expect(MathUtil.multiply(3, 4)).toBe(12);
        });
    });

    describe('divide()', () => {
        it('should divide numbers', () => {
            expect(MathUtil.divide(20, 5)).toBe(4);
        });

        it('should throw when dividing by zero', () => {
            expect(() => MathUtil.divide(10, 0)).toThrow("Cannot divide by zero");
        });
    });

    describe('power()', () => {
        it('should calculate power', () => {
            expect(MathUtil.power(2, 3)).toBe(8);
        });
    });

    describe('sqrt()', () => {
        it('should return square root of a number', () => {
            expect(MathUtil.sqrt(9)).toBe(3);
        });

        it('should throw for negative number', () => {
            expect(() => MathUtil.sqrt(-4)).toThrow("Cannot compute square root of negative number");
        });
    });

    describe('average()', () => {
        it('should return correct average', () => {
            expect(MathUtil.average([2, 4, 6])).toBe(4);
        });

        it('should throw for empty array', () => {
            expect(() => MathUtil.average([])).toThrow("Input must be a non-empty number array");
        });

        it('should throw if array contains non numbers', () => {
            expect(() => MathUtil.average([1, "x", 3])).toThrow("All elements must be numbers");
        });
    });

});
