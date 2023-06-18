function eqArrays(array1, array2) {
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

//testing
console.log("test case 1: ");
eqArrays([1, 2, 3], [1, 2, 3]);
console.log("test case 2: ");
eqArrays([4, 5], [5, 6, 9]);
console.log("test case 3: ");
eqArrays([1, 2, 3],[1, 4, 7]);
console.log("test case 4: ");
eqArrays(["Fuzz", "Buzz"], ["Fuzz", "Buzz"]);

