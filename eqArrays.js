//note the instructions were to paste our previous assertEqual function into this
//but I ended up writing a totally different solution that doesn't use it
//so it's presence here is redundant and should probably be removed, but I kept it because of the instructions....
/*
const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `Assertion Failed: ${actual} != ${expected}`;
  }

  console.log(message);
};*/

function eqArrays(array1, array2) {

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

//test cases
console.log(eqArrays([1, 2, 3], [1, 2, 3])); //should assess true
console.log(eqArrays([4, 5], [5, 6, 9])); //should assess false
console.log(eqArrays([1, 2, 3],[1, 4, 7])); //should assess false
console.log(eqArrays(["Fuzz", "Buzz"], ["Fuzz", "Buzz"])); //should assess true