/* const without = (arr1, arr2) => {
    let itemsToReturn = [];
    arr1.forEach(item =>  {
        if(!arr2.includes(item)){
            itemsToReturn.push(item);
        }
    });
    return itemsToReturn;
}; */

const without = function(sourceArray, removalArray){
  let result = [];
  for(let elem of sourceArray){
    if(!removalArray.includes(elem)){
      result.push(elem)
    }

  }
  return result
}


//test cases
console.log(without([14, 14, 3, 7, 9, 14],[14]))
console.log(without([10, 14, 10, 7, 9, 14],[10, 7]))
console.log(without(["Apple", "Kiwi", "Banana", "Orange", "Lychee"], ["Kiwi", "Lychee"]))
console.log(without(["Apple", "Kiwi", "Banana", "Orange", 10, 25], ["Kiwi", "Lychee", 10]))