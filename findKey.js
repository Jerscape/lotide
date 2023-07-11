//imports
const assertEqual = require('./assertEqual');


//find key function accepts object, and callback function which evaluates for truthiness
//it returns the first key for which the callback returns a truthy value
const findKey = function(object, callback) {

  for (let key in object) {
    let target = object[key];
    
    let outcome = callback(target);
    if (outcome === true) {
      return key;
    }
    
    
  }

}; 


//This testing demonstrates an example of the use of the callback
// const result = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 4 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 45); // => "noma"
// console.log(result);

//exports
module.exports = findKey;