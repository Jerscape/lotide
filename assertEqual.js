//assert equal compares two primative data types for equality
const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `Assertion Failed: ${actual} != ${expected}`;
  }

  //logs assertion message
  console.log(message);
};

//exports
module.exports = assertEqual;



