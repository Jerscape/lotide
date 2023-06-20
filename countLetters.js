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

const countLetters = function(sentence){
  let lettersCount = {}

  //build for loop
  //figure out how to assess each letter and to confirm if it has or has not been counted so far 
  //JN for the above I think the approach in the outer if statemne tin countOnly would work
  //if it has not, you will need to add a new key/value pair
  //if is has, you will need to add it to the exist key/value pair, which should be possible using bracket notation
  //you have to account for blanks somehow....either count them but don't add them orfilter them out (refer back to Katas you did this somewhere)

  for(const elem of countLetters){

    //assess if already in the object
    if(countLetters[elem] !== lettersCount[elem]){  //this is not going to work because it is not an object, it is a string...add to an array to compare against?
      //could just compare against return object? 
    }

    else{
      //add to existing 
      // don't forget to count
    }

  }

}

//put in tests here