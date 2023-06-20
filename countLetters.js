//the instructions were to paste this in to test or result, but..
//I confirmed with a mentor that this wil not work,
//as you cannot compare the content of objects this way
// this will only compare their referential equality

/*
const assertEqual = function(actual, expected) {
  //need to update to handle objects 
  let message = "";
  if (actual === expected) {
    message = `Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `Assertion Failed: ${actual} != ${expected}`;
  }

  console.log(message);
}; */

//countLetters function

//figure out how to assess each letter and to confirm if it has or has not been counted so far 
//JN for the above I think the approach in the outer if statemne tin countOnly would work
//if it has not, you will need to add a new key/value pair
//if is has, you will need to add it to the exist key/value pair, which should be possible using bracket notation

const countLetters = function(sentence) {
  let lettersCount = {};
  sentence = sentence.toLowerCase();

  for (const elem of sentence) {

    //screen out blanks
    if (elem !== " ") {
      //assess if already in the object
      if (!lettersCount[elem]) {
        
        lettersCount[elem] = 1;
  
      } else {
        //add to existing
        // don't forget to count
        lettersCount[elem] += 1;
        
      }

    }

  }
  return lettersCount;

};

//put in tests here
//confirmed with a mentor that assertEqual will not accurate compare objects
//he said to build an assertObjectEqual function. That is further down the list.
//after you build it, come back and test
console.log(countLetters("My yellow beetle"));
let result = countLetters("My yellow beetle");
//assertEqual(result, { m: 1, y: 2, e: 4, l: 3, o: 1, w: 1, b: 1, t: 1 });
//console.log(countLetters("My name is Jeremy")); 