//assert equals 

const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `Assertion Failed: ${actual} != ${expected}`;
  }

  console.log(message);
};

//eq array

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

//eqObject

const eqObjects = function(object1, object2){
  let result = ""
  let object1Keys = Object.keys(object1)
  let Object2Keys = Object.keys(object2) 
  console.log(object1Keys)
 
  //don't forget to test for length



  /*let Object1Array = []
  let Object2Array = []

  for(let item in object1){
    let kValue1 = object1[item]
    object1.push([item, kValue1])//push array of key value pair onto array
  }

  for(let item in object2){
    let kValue2 = object1[item]
    object2.push([item, kValue2])//push array of key value pair onto array
  }
*/



/*
  for(let item in object1){
    let kValue1 = object1[item]
    for(item in object2) {
      let kValue2

      let keyEqual = assertEqual(object1[item], item)
      let valueEqual 

      if(){

      }

    }

  }*/


}




//testing
