
//need to refactor my assertArraysEqual then copy it here

const map = function(array, callback){
  let results = [];

  for(let item of array){
    results.push(callback(item))
  }

  
  return results;

}

// testing

function assertArraysEqual(array1, array2) {
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
}


const words = ["ground", "control", "to", "major", "tom"];
//const results1 = map(words, word => word = word[0])
//console.log(results1)

//const testArray = ['g', 'c', 't' ,'m', 't' ]
const bloop = map(words, word => word = "bloop")
const bloopTest = ['bloop', 'bloop', 'bloop', 'bloop', 'bloop']

//assertArraysEqual(results1, testArray)
//console.log("bloop test is: " + assertArraysEqual(bloop, bloopTest))
const bloopResult = assertArraysEqual(bloop, bloopTest)
console.log("bloop result: " , bloopResult)
