const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    //test for blanks
    if (sentence[i] !== " ") {
      //if the evaluation of sentence[i] is not already in the results object
      if (!results[sentence[i]]) {
        //then the value of sentence[i] = index value i
        results[sentence[i]] = [i];

      } else {
        //then push index value i onto key represented by sentence[i]
        results[sentence[i]].push(i);
      }

    }

  }

  return results;

};

//assert array equal
const assertArraysEqual = function(array1, array2) {
  let result = "";
  //judge length and if length is the same test each element against each element
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      //assess if any of the values DO NOT match, if so return false immediately
      if (array1[i] !== array2[i]) {
        result = false;
      } else {
        result = true;
      }
    }

  } else {
    //returns false if the array lengths do not match
    result = false;
  }
  
  console.log(result);
};

//console.log(letterPositions("hello jello"));
//console.log(letterPositions("hello"));
console.log(letterPositions("banana rama sundae"));

//assert arrays equal code
