const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `Assertion Failed: ${actual} != ${expected}`;
  }

  console.log(message);
};

//ARRAY TEST FUNCTION

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

//EQOBJECTS FUNCTION

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

//testing

/*
let testingObject1 = {name: "Juniper", age: "20", occupation: "Student"}
let testingObject2 = {name: "Juniper", age: "20", occupation: "Student"}
let testingObject3 = {name: "Juniper", age: "30", occupation: "Mouse Chaser"}
let testingObject4 = {name: "Jeeves", age: "30"}


//eqObjects(testingObject1, testingObject2)
//eqObjects(testingObject1, testingObject3)

*/

//arrays test
const multicolourShirtObject = {colours: ["red", "blue"], size: "medium"};
const anotherMultiColourShirtObject = {size: "medium", colours: ["red", "blue"]};

//it is console logging undefined because it hasn'returned anything. The first true in the console is the result of the eqObects function call below
//console.log("test 1 " + eqObjects(multicolourShirtObject, anotherMultiColourShirtObject))
console.log("test 1");
eqObjects(multicolourShirtObject, anotherMultiColourShirtObject);
const longSleeveMultiColourShiftObject = {size: "medium", colours: ["red", "blue"] , sleeveLength: "long"};

//console.log("test 2 " + eqObjects(multicolourShirtObject, longSleeveMultiColourShiftObject))
console.log("test 2");
eqObjects(multicolourShirtObject, longSleeveMultiColourShiftObject);

//there is a 3rd true statement coming from somewhere, it must be this above call (erronouse)

