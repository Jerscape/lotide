const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')

let result = middle(["Blur", "Oasis", "Pulp", "Radiohead", "James"]);
console.log("Result " + result); //pulling correct result
console.log(assertArraysEqual(["Pulp"], result)) //should be true

let result2 = middle(["Blur", "Oasis",  "Radiohead", "James"]);
console.log("Result " + result2); //pulling correct result
console.log(assertArraysEqual(["Oasis", "Radiohead"], result2))//should be true

let result3 = middle(["Blur", "Radiohead", "James"]);
console.log("Result " + result3); //pulling correct result
console.log(assertArraysEqual(["Oasis", "Radiohead"], result3)) //should be false

//each one evaluates correctly, but I keep getting an additional "undefined" after each one...the true/false seems to be returning from middle. via eq arrays

//test case 1
// let result2 = middle(["Blur", "Oasis", "Pulp", "Radiohead", "James"]);
// console.log("Result " + result); //pulling correct result
// console.log(eqArrays(["Pulp"], result)); //should be true but returning false...eqArrays not working?
// //test case 2
// let result3 = middle(["Blur", "Oasis", "Pulp", "James", "The Smiths", "The Cure"]);
// console.log("Result2 " + result2);
// console.log(eqArrays(["Pulp", "James"], result2));
// //test case 3 (false)
// console.log("Result2 for result 3 " + result2);
// console.log(eqArrays(["Pulp"], result2)); //should be false