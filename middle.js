
//middle function
function middle(array) {
  let alength = array.length;
  let middle = [];

  if (alength >= 3) {
    let evenOdd = alength % 2;
   
    if (evenOdd === 1) {
      let div = (alength - 1) / 2;
      middle.push(array[div]);

    } else {
      let div = alength / 2;
      middle.push(array[div - 1], array[div]);
 
    }

  }
  return middle;
}

//exports
module.exports = middle;



