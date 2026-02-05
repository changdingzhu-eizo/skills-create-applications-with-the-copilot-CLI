#!/usr/bin/env node
/**
 * Node.js CLI Calculator
 * Supports: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
 * Usage: node src/calculator.js <num1> <operator> <num2>
 * Example: node src/calculator.js 5 + 3
 */

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero in modulo');
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) throw new Error('Cannot take square root of negative number');
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

if (require.main === module) {
  const [,, num1, operator, num2] = process.argv;

  function printUsage() {
    console.log('Usage: node src/calculator.js <num1> <operator> <num2>');
    console.log('Operators: +  -  ×  ÷');
    console.log('Example: node src/calculator.js 5 + 3');
  }

  if (!num1 || !operator || !num2) {
    printUsage();
    process.exit(1);
  }

  const a = parseFloat(num1);
  const b = parseFloat(num2);
  let result;

  try {
    switch (operator) {
      case '+':
        result = add(a, b);
        break;
      case '-':
        result = subtract(a, b);
        break;
      case '×':
      case '*':
        result = multiply(a, b);
        break;
      case '÷':
      case '/':
        result = divide(a, b);
        break;
      default:
        console.error('Invalid operator. Supported: +  -  ×  ÷');
        printUsage();
        process.exit(1);
    }
    console.log(`Result: ${result}`);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}
