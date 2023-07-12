//imports
const eqArrays = require('./eqArrays');


//EQOBJECTS FUNCTION
const eqObjects = function(object1, object2) {

  let object1KeysArr = Object.keys(object1);
  let object2KeysArr = Object.keys(object2);

  //suggestion from mentor, refactor with guard clauses
  if (object1KeysArr.length === object2KeysArr.length) {

 
    for (let elem of object1KeysArr) {

      if (object2KeysArr.includes(elem)) {

        let keyValue1 = object1[elem];
        let keyValue2 = object2[elem];

        if (Array.isArray(keyValue1) && Array.isArray(keyValue2)) {
          
          const match = eqArrays(keyValue1, keyValue2);

          if (!match) {
            return false;
          }

        } else if (keyValue1 !==  keyValue2) {

         
          return false;
        }

      } else {
       
        return false;
      }

       
    }

  } else {

    //return false immediately if the length of each objects keys array doesn't match
    return false;
  } 

  return true;
}; 

//export function
module.exports = eqObjects;