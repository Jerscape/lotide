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

function assertArraysEqual(array1, array2) {
  //let result = "";
  //judge length and if length is the same test each element against each element
  let result = eqArrays(array1, array2)
  console.log(result);
}

//testing
/* console.log("test case 1: ");
assertArraysEqual([1, 2, 3], [1, 2, 3]);
console.log("test case 2: ");
assertArraysEqual([4, 5], [5, 6, 9]);
console.log("test case 3: ");
assertArraysEqual([1, 2, 3],[1, 4, 7]);
console.log("test case 4: ");
assertArraysEqual(["Fuzz", "Buzz"], ["Fuzz", "Buzz"]);
*/

//testing multi dim arrays
//console.log("Multi dim test case")
//assertArraysEqual([["Speed", 200], ["value", 100]], [["Speed", 200], ["value", 100]] )

const animals = ["dog", "Cat", "mouse", "bird"]
assertArraysEqual(animals, ["dog", "Cat", "mouse", "bird"])

