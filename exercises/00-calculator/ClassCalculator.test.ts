import Calculator from './ClassCalculator';
import assert from 'node:assert/strict';


const calculator = new Calculator();

assert(calculator.add(1, 2) === 3);
assert(calculator.getLastCalculation() === 3);
assert(calculator.subtract(4, 2) === 2);
assert(calculator.getLastCalculation() === 2);
assert(calculator.multiply(4, 2) === 8);
assert(calculator.getLastCalculation() === 8);
assert(calculator.divide(45, 5) === 9);
assert(calculator.getLastCalculation() === 9);
