const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(arr) {
  return arr.reduce((total, val) => total + val, 0);	
};

const multiply = function(a, b, ...args) {
  let prod = a * b;
  for (let arg in args) {
    prod *= args[arg];
  }

  return prod;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
  let fact = 1;
  for (let i = a; i > 0; i--) {
    fact *= i;
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
