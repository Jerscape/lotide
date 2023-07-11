
//import
const eqArrays = require("./eqArrays");

//map function
const map = function(array, callback) {
  let results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  
  return results;

};

//export function
module.exports = map