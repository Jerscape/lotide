

const eqArrays = require("./eqArrays");

function assertArraysEqual(array1, array2) {
  //let result = "";
  //judge length and if length is the same test each element against each element
  let result = eqArrays(array1, array2)
  console.log(result);
}

module.exports = assertArraysEqual




