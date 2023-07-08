//eqArrays function (returns true or false)


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

//assertArraysEqual (console.logs a message, true or false)
function assertArraysEqual(array1, array2) {
  let result = "";
  //judge length and if length is the same test each element against each element
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      //assess if any of the values DO NOT match, if so return false immediately
      if (array1[i] !== array2[i]) {
        result = false;
      } else {
        result = true;
      }
    }

  } else {
    //returns false if the array lengths do not match
    result = false;
  }
  
  console.log(result);
}

//without function
const without = function(sourceArray, removalArray) {
  let result = [];
  for (let elem of sourceArray) {
    if (!removalArray.includes(elem)) {
      result.push(elem);
    }

  }
  return result;
};


//test cases

// let result1 = without([14, 14, 3, 7, 9, 14],[14]);
// let result2 = without([10, 14, 10, 7, 9, 14],[10, 7]);
// let result3 = without(["Apple", "Kiwi", "Banana", "Orange", "Lychee"], ["Kiwi", "Lychee"]);
// let result4 = without(["Apple", "Kiwi", "Banana", "Orange", 10, 25], ["Kiwi", "Lychee", 10]);

// console.log(eqArrays([3, 7, 9], result1));
// console.log(eqArrays([14, 9, 14], result2));
// console.log(eqArrays(["Apple", "Banana", "Orange"], result3));
// console.log(eqArrays(["Apple", "Banana", "Orange", 25], result4));
// console.log("Should evaluate false: ");
// console.log(eqArrays([14, 9, 14], result4));

// console.log(without([14, 14, 3, 7, 9, 14],[14]))
// console.log(without([10, 14, 10, 7, 9, 14],[10, 7]))
// console.log(without(["Apple", "Kiwi", "Banana", "Orange", "Lychee"], ["Kiwi", "Lychee"]))
// console.log(without(["Apple", "Kiwi", "Banana", "Orange", 10, 25], ["Kiwi", "Lychee", 10]))


module.exports = without