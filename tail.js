
const tail = function(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {

    if (i !== 0) {
      result.push(array[i]);
    }

  }

  return result;
};

//exporting tail function
module.exports = tail



