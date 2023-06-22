//asked us to copy and paste our assert equals function but I don't see why

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

  let object1KeysArr = Object.keys(object1)
  let object2KeysArr = Object.keys(object2)
  //let object1ValuesArr = Object.values(object1)
  //let object2ValuesArr = Object.values(object2)

  //test key array length

  //suggestion from mentor, refactor with guard clauses 
  if(object1KeysArr.length === object2KeysArr.length) {

    //if the length matches, compare keys?
    for(let elem of object1KeysArr){

      if(object2KeysArr.includes(elem)){
        //I don't think the following line is correctly accessing the values
        //object1[elem] !==  object2[elem]
        let keyValue1 = object1[elem];
        let keyValue2= object2[elem];

        //assess if both key values are arrays, if so evaluate against eachother using assertArraysEqual function
        if(Array.isArray(keyValue1) && Array.isArray(keyValue2)){
          
          const match = eqArrays(keyValue1, keyValue2)

          if(!match ){
            return false 
          }

        }


        else if(keyValue1 !==  keyValue2) {

         
          return false 
        } 

      }

      else {
        //if keys don't match
        return false
      }

       
    }

  } else {
    //return false immediately if the length of each objects keys array doesn't match
    return false 
  } //end length if 

  return true 
  } // end function

//testing

let testingObject1 = {name: "Juniper", age: "20", occupation: "Student"}
let testingObject2 = {name: "Juniper", age: "20", occupation: "Student"}
let testingObject3 = {name: "Juniper", age: "30", occupation: "Mouse Chaser"}
let testingObject4 = {name: "Jeeves", age: "30"}


//eqObjects(testingObject1, testingObject2)
//eqObjects(testingObject1, testingObject3)

//arrays test
const multicolourShirtObject = {colours: ["red", "blue"], size: "medium"}
const anotherMultiColourShirtObject = {size: "medium", colours: ["red", "blue"]}

console.log(eqObjects(multicolourShirtObject, anotherMultiColourShirtObject))
const longSleeveMultiColourShiftObject = {size: "medium", colours: ["red", "blue"] , sleeveLength: "long"}
console.log(eqObjects(multicolourShirtObject, longSleeveMultiColourShiftObject))


