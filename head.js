
//imports
const assertEqual = require('./assertEqual');

//head function, identifies first element in array
const head = function(array) {
  let head = array[0];
  return head;
};


//returns new array with first elment of submitted array
module.exports = head;