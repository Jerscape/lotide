

//countOnly function takes in two arguments. 1) an array and 2) items to count in that array
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {

    if (itemsToCount[item]) {

      if (results[item]) {
        
        results[item] += 1;

      } else {
        
        results[item] = 1;
      }

    }

  }

  //results["Total Result Count"] = resultCount
  return results;
};


//export function
module.exports = countOnly