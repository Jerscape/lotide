//use Array.isArray() to compare arrays

//eqArrays
const eqArrays = function(array1, array2) {

  //judge length
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

  return true;
}

//assertequal
const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `Assertion Failed: ${actual} != ${expected}`;
  }

  console.log(message);
};

//flatten

const flatten = function(arrayToFlatten) {
  let result = [];
  //process array using for loop
  for (let i = 0; i < arrayToFlatten.length; i++) {

    //assess if each element is an array or not, they will need to be processed slightly different if they are
    if (Array.isArray(arrayToFlatten[i])) { //getting an error, not a function
      for (let elem of arrayToFlatten[i]) {
        result.push(elem);
      }
    } else {
      result.push(arrayToFlatten[i]);
    }
  
  }
  return result;
};

//console.log(flatten([1, 2, [3, 4], 5, [6]])); //this one works,
//console.log(flatten([[1, 3, 5], [7, 9, 11]])); //only returning numbers from teh first array
console.log(eqArrays([1, 2, 3, 4, 5, 6], flatten([1, 2, [3, 4], 5, [6]])));//should evaluate true
console.log(eqArrays([1, 2, 3, 4, 5, 6], flatten([[1, 3, 5], [7, 9, 11]])));//should evaluate false
console.log(eqArrays([1, 3, 5, 7, 9, 11], flatten([[1, 3, 5], [7, 9, 11]])));//should evalute true



