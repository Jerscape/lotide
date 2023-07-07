//Assert Equal Function

const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `Assertion Failed: ${actual} != ${expected}`;
  }

  console.log(message);
};


const countOnly = function(allItems, itemsToCount) {
  const results = {};
  //let resultCount=""

  for (const item of allItems) {
    //console.log(item);
    //resultCount++
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

//test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


