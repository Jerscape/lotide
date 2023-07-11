

//flatten accepts a 2 dimensional array and returns a 1 dimensional array
const flatten = function(arrayToFlatten) {
  let result = [];
  
  for (let i = 0; i < arrayToFlatten.length; i++) {

    if (Array.isArray(arrayToFlatten[i])) { 
      for (let elem of arrayToFlatten[i]) {
        result.push(elem);
      }
    } else {
      result.push(arrayToFlatten[i]);
    }
  
  }
  return result;
};

//export function
module.exports = flatten



