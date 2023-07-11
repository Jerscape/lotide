

//finds all letters in input array, and returns an object with keys representing the letters
//and their respective values representing their total count in the sentence
const countLetters = function(sentence) {
  let lettersCount = {};
  sentence = sentence.toLowerCase();

  for (const elem of sentence) {

    if (elem !== " ") {

      if (!lettersCount[elem]) {
        
        lettersCount[elem] = 1;
  
      } else {
        
        lettersCount[elem] += 1;
        
      }

    }

  }
  return lettersCount;

};

//export function
module.exports = countLetters;

