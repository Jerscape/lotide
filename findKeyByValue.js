//takes in an object, AND a value. Returns the first key which contains the given value
//if no key is found it should return undefined. 

const findKeyByValue = function(object, value){
  let result = ""
  //console.log(convertedToArray)

  for(let item in object){
    let kValue = object[item]
    //console.log("Genre: " + item + "value: " + kValue)
    if(value === kValue){
      //console.log(item)
      result = item
      return result
    }
  }

};

// testing

const testObject = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"};

//console.log(findKeyByValue(testObject, "The Wire"))
//console.log(findKeyByValue(testObject, "The Expanse"))
//findKeyByValue(testObject, "The Wire")
//findKeyByValue(testObject, "The Expanse")

//assertEqual for tsting

const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `Assertion Failed: ${actual} != ${expected}`;
  }

  console.log(message);
};

//test cases 

let testCase1 = findKeyByValue(testObject, "The Wire")

assertEqual(testCase1, "drama")