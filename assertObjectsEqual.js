const eqObjects = require('./eqObjects');


//EQ assertObjectsEqual

const assertObjectsEqual = function(actual, expected){
  const inspect = require('util').inspect; 
  let result = eqObjects(actual, expected)
  console.log(result)
}

let testObj1 = {name: "Jeremy", location: "Tbay"}
let testObj2 = {name: "Jeremy", location: "Tbay"}
let testObj3 = {name: "Jeremy", location: "MiddleMarch"}

// console.log("should be true")
// assertObjectsEqual(testObj1, testObj2)
// console.log("should be false")
// assertObjectsEqual(testObj1, testObj3)


module.exports = assertObjectsEqual 