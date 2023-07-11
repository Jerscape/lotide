

let eqArrays = function(array1, array2) {

  //if length is the same test each element against each element
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {

      //assess if any of the values DO NOT match, if so return false immediately
      if (array1[i] !== array2[i]) {
        return false;
      }
    }

  } else {
    //returns false if the array lengths do not match
    return false;
  }

  //returns true if array length matches and values of both arrays match
  return true;
};

//exports
module.exports = eqArrays;

