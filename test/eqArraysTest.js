const eqArrays = require("../eqArrays");

console.log(eqArrays([1, 2, 3], [1, 2, 3])); //should assess true
console.log(eqArrays([4, 5], [5, 6, 9])); //should assess false
console.log(eqArrays([1, 2, 3],[1, 4, 7])); //should assess false
console.log(eqArrays(["Fuzz", "Buzz"], ["Fuzz", "Buzz"])); //should assess true


