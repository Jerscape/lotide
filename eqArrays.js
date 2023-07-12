
//eq arrays compares two values for equality and returns a boolean value
let eqArrays = function(array1, array2) {


  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {

      
      if (array1[i] !== array2[i]) {
        return false;
      }
    }

  } else {
    
    return false;
  }

  //returns true if array length matches and values of both arrays match
  return true;
};

//export function
module.exports = eqArrays;

