
//imports
const eqArrays = require("./eqArrays");

//assertArraysEqual takes in two arrays and compares them for equality
const assertArraysEqual = function(array1, array2) {

  let result = eqArrays(array1, array2);
  console.log("Result:" + result);
};

//exports
module.exports = assertArraysEqual;





