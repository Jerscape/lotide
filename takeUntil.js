
//take until accepts array,and callback function. It returns a slice at the front of the array
//stopping at the first truthy value returned by the callback
const takeUntil = function(array, callback) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let outcome = callback(array[i]);
    if (outcome === true) {
      result = array.slice(0, [i]);
      return result;
    }
  }

};

//testing left here to demonstrate use of callback to evaluate truthiness
//const fivesData = [5, 10, 15, 20, 25, 30, 35, 40, 45];
//const result = takeUntil(fivesData, item => item === 10) //x => x <= will return true when x hits or equals 25 so your call will be takeUntil(fivesData, true)
// const result = takeUntil(fivesData, x => x === 15);
// console.log(result);

//export function
module.exports = takeUntil;