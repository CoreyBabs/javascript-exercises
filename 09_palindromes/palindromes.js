const palindromes = function (text) {
  let t = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  t = t.replace(/\s/g, "");
  t = t.toLowerCase();
  let reversed = t.split("").reverse().join("");
  return reversed === t;
};

// Do not edit below this line
module.exports = palindromes;
