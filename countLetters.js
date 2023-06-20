const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `Assertion Failed: ${actual} != ${expected}`;
  }

  console.log(message);
};

//countLetters function

//figure out how to assess each letter and to confirm if it has or has not been counted so far 
//JN for the above I think the approach in the outer if statemne tin countOnly would work
//if it has not, you will need to add a new key/value pair
//if is has, you will need to add it to the exist key/value pair, which should be possible using bracket notation

const countLetters = function(sentence) {
  let lettersCount = {};
  sentence = sentence.toLowerCase()

  for (const elem of sentence) {

    //screen out blanks
    if (elem !== " ") {
      //assess if already in the object
      //could just compare against return object?
      if (sentence[elem] !== lettersCount[elem]) {
        
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
console.log(countLetters("My name is Jeremy"));