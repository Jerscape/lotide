const eqObjects = require('./eqObjects');


//EQ assertObjectsEqual

const assertObjectsEqual = function(obj1, obj2){
  const inspect = require('util').inspect;
  let result = eqObjects(obj1, obj2)
  console.log("Result: " + result) 
}

//testing

const testObject1 = {a: 1, b: 2}
const testObject2 = {a: 1, b: 2}
const testObjectFalse = {a: 1, b: 2, c: 3}

console.log("test 1, should return true")
console.log(assertObjectsEqual(testObject1, testObject2))


module.exports = assertObjectsEqual 