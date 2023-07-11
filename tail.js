
//accepts an array and returns the tail of the array
const tail = function(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {

    if (i !== 0) {
      result.push(array[i]);
    }

  }

  //returns array with tail of array
  return result;
};

//exporting tail function
module.exports = tail



