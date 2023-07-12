//takes in an object, AND a value. Returns the first key which contains the given value
//if no key is found it returns undefined.

const findKeyByValue = function(object, value) {
  let result = "";
  

  for (let item in object) {
    let kValue = object[item];

    if (value === kValue) {
      
      result = item;
      return result;
    }
  }

};


//export function
module.exports = findKeyByValue;