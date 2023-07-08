const assertEqual = require('./assertEqual');


//find key function

const findKey = function(object, callback) {

  for (let key in object) {
    let target = object[key];
    
    let outcome = callback(target);
    if (outcome === true) {
      return key;
    }
    

    
  }//end first for of

}; //end function


//testing
// const bloop = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 4 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 45); // => "noma"
// console.log(bloop);

module.exports = findKey;