const assertEqual = function(actual, expected){
  let message = ""
  if(actual === expected){
    message = `Assertion Passed: ${actual} === ${expected}`
  } else {
    message = `Assertion Failed: ${actual} != ${expected}`
  }

  console.log(message)
}

assertEqual("Lighthouse Labs", "Bootcamp")
assertEqual(1, 1)
assertEqual("fuzz", "fuzz")
assertEqual("Blah", "blah")
assertEqual(7, 10) 

/*
const assertEqual = function(actual, expected){
//JN remember it could be a string or a number, we may need to validate first and have two seperate evaluation equations
let errorMsg = "Assertion Failed: " + actual + "! === " + expected  
console.assert(actual === expected, errorMsg)

//this is catching the true, but ALSO the false....
if(!console.assert(actual === expected)){
  //console.log("Assertion Passed: "+ actual + " === " + expected)
  //using template literal instead of concatenation
  console.log(`Assertion passed, ${actual} === ${expected}`)
}

};
*/

