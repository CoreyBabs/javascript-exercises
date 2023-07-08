const fibonacci = function(idx) {
  if (+idx < 0) return "OOPS";
  if (+idx === 1 || +idx === 2) {
    return 1;
  }

  return fibonacci(idx - 1) + fibonacci(idx - 2);
};

// Do not edit below this line
module.exports = fibonacci;
