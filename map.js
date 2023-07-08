

const eqArrays = require("./eqArrays");

const map = function(array, callback) {
  let results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  
  return results;

};

// testing

// const words = ["ground", "control", "to", "major", "tom"];

// //const testArray = ['g', 'c', 't' ,'m', 't' ]
// const bloop = map(words, word => word = "bloop");
// const bloopTest = ['bloop', 'bloop', 'bloop', 'bloop', 'bloop'];

//as assertArraysEqual console logs and does not return, this test does not work
//instead I am going to use eqArrays
//const bloopResult = assertArraysEqual(bloop, bloopTest)
//console.log("bloop result: " , bloopResult)
// let bloopResult = eqArrays(bloop, bloopTest);
// console.log(bloopResult);

module.exports = map