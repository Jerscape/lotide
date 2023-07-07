

const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  //let result = "";
  //judge length and if length is the same test each element against each element
  let result = eqArrays(array1, array2);
  console.log("Result:" + result);
};

module.exports = assertArraysEqual;

//module.export = assertArraysEqual




