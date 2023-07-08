
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

//THIS DOES NOT WORK AND MENTOR CONFIRMED IT WILL NOT WORK, BUT THE INSTRUCTIONS SAY TO PASTE IT IN HERE?
//ASSERT EQUALS
const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `Assertion Failed: ${actual} != ${expected}`;
  }

  console.log(message);
};

//export function

module.exports = countLetters;

//put in tests here

//console.log(countLetters("My yellow beetle"));
//let result = countLetters("My yellow beetle");
//console.log(result)
//assertEqual(result, { m: 1, y: 2, e: 4, l: 3, o: 1, w: 1, b: 1, t: 1 });
//console.log(countLetters("My name is Jeremy"));