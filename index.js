// 1. Arrow function to square a number
const square = (number) => number * number;

// 2. Arrow function to add two numbers
const add = (a, b) => a + b;
// 3. Arrow function to divide two numbers
const divide = (a, b) => a/b;

// Export the functions if needed (for Node.js environments)
module.exports = {
  square,
  add,
  divide,
};
