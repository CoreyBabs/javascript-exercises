const sumAll = function(val1, val2) {
  if (val1 < 0 || val2 < 0 || !Number.isInteger(val1) || !Number.isInteger(val2)) {
    return "ERROR";
  }

  let sum = 0;
  let max = val1 > val2 ? val1 : val2;
  let min = val1 < val2 ? val1 : val2;

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
