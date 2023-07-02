const removeFromArray = function(arr, ...vals) {
  for (const val of vals) {
    const idx = arr.indexOf(val);

    if (idx != -1) {
      arr.splice(idx, 1)
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
