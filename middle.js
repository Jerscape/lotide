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

function middle(array) {
  let alength = array.length;
  let middle = [];

  if (alength >= 3) {
    let evenOdd = alength % 2;
   
    if (evenOdd === 1) {
      let div = (alength - 1) / 2;
      middle.push(array[div]);

      //presumably this should be only even arrays
    } else {
      let div = alength / 2;
      middle.push(array[div - 1], array[div]);
 
    }

  }
  return middle;
}

//test case 1
let result = middle(["Blur", "Oasis", "Pulp", "Radiohead", "James"]);
console.log("Result " + result); //pulling correct result
console.log(eqArrays(["Pulp"], result)); //should be true but returning false...eqArrays not working?
//test case 2
let result2 = middle(["Blur", "Oasis", "Pulp", "James", "The Smiths", "The Cure"]);
console.log("Result2 " + result2);
console.log(eqArrays(["Pulp", "James"], result2));
//test case 3 (false)
console.log("Result2 for result 3 " + result2);
console.log(eqArrays(["Pulp"], result2)); //should be false

