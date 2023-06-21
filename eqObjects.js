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

//eqObject

const eqObjects = function(object1, object2){
  let result = ""


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
