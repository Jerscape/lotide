//imports
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')

//without function accepts source array, and an array listing items to remove from source array
const without = function(sourceArray, removalArray) {
  let result = [];
  for (let elem of sourceArray) {
    if (!removalArray.includes(elem)) {
      result.push(elem);
    }

  }
  //returns array, less the items to be removed
  return result;
};

//export function
module.exports = without