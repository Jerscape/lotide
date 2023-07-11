//Imports
const eqObjects = require('./eqObjects');

//assertObjectsEqual compares two objects for equality and results log of result
const assertObjectsEqual = function(actual, expected){
  const inspect = require('util').inspect; 
  let result = eqObjects(actual, expected)
  console.log(result)
}

//Exports
module.exports = assertObjectsEqual 