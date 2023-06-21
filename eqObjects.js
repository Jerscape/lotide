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
  let object1Keys = Object.keys(object1)
  let object2Keys = Object.keys(object2)
  let object1Values = Object.values(object1)
  let object2Values = Object.values(object2)

  console.log(object1Keys)


};




//testing
