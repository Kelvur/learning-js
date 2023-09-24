import Calculator from './ClassCalculator';


describe('Class Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('should add two numbers', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    it('should subtract two numbers', () => {
        expect(calculator.subtract(4, 2)).toBe(2);
    });

    it('should multiply two numbers', () => {
        expect(calculator.multiply(4, 2)).toBe(8);
    });
    it('should divide two numbers', () => {
        expect(calculator.divide(45, 5)).toBe(9);
    });

    it('should return the last calculation', () => {
        calculator.add(1, 2);
        expect(calculator.getLastCalculation()).toBe(3);
    });
});
