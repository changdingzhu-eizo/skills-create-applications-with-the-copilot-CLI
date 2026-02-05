// calculator.tests.js
// Unit tests for calculator.js using Jest

const { add, subtract, multiply, divide } = require('../calculator');

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
});
