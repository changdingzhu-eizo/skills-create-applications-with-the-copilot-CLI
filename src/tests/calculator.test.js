// calculator.tests.js
// Unit tests for calculator.js using Jest

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator Operations', () => {
  test('Addition: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('Subtraction: 10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('Multiplication: 45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('Division: 20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('Division by zero throws error', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });

  test('Negative numbers: -5 + 3 = -2', () => {
    expect(add(-5, 3)).toBe(-2);
  });

  test('Floating point: 2.5 * 4 = 10', () => {
    expect(multiply(2.5, 4)).toBe(10);
  });

  test('Modulo: 5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('Modulo by zero throws error', () => {
    expect(() => modulo(5, 0)).toThrow('Division by zero in modulo');
  });

  test('Power: 2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('Power: 5 ^ 0 = 1', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('Square root: sqrt(16) = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('Square root: sqrt(0) = 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('Square root of negative throws error', () => {
    expect(() => squareRoot(-9)).toThrow('Cannot take square root of negative number');
  });
});
