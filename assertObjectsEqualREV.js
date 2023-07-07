//EQOBJECTS FUNCTION

const { assert } = require("console");

const eqObjects = function(object1, object2) {
  const inspect = require("util").inspect; //imports util libraries inspect function (as per the instructions)
  let result = "";
  let object1KeysArr = Object.keys(object1);
  let object2KeysArr = Object.keys(object2);

  //suggestion from mentor, refactor with guard clauses
  if (object1KeysArr.length === object2KeysArr.length) {

    //if the length matches, compare keys?
    for (let elem of object1KeysArr) {

      if (object2KeysArr.includes(elem)) {
        //I don't think the following line is correctly accessing the values
        //object1[elem] !==  object2[elem]
        let keyValue1 = object1[elem];
        let keyValue2 = object2[elem];

        //assess if both key values are arrays, if so evaluate against eachother using assertArraysEqual function
        if (Array.isArray(keyValue1) && Array.isArray(keyValue2)) {
          
          const match = eqArrays(keyValue1, keyValue2);

          if (!match) {
            result = false;
          }

        } else if (keyValue1 !==  keyValue2) {
          result = false;
        }

      } else {
        //if keys don't match
        result = false;
      }
       
    }

  } else {
    //return false immediately if the length of each objects keys array doesn't match
    result = false;
  } //end length if

  if (result !== false) {
    result = true;
  }

  console.log(result);

}; // end function


const assertObjectsEqual = function(actual, expected){
  const inspect = require('util').inspect; 
  let result = eqObjects(actual, expected)
  console.log(result)
}

let testObj1 = {name: "Jeremy", location: "Tbay"}
let testObj2 = {name: "Jeremy", location: "Tbay"}
let testObj3 = {name: "Jeremy", location: "MiddleMarch"}

console.log("should be true")
assertObjectsEqual(testObj1, testObj2)
console.log("should be false")
assertObjectsEqual(testObj1, testObj3)