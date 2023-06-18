const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `Assertion Failed: ${actual} != ${expected}`;
  }

  console.log(message);
};

const tail = function(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {

    if (i !== 0) {
      result.push(array[i]);
    }

  }

  return result;
};

const testResult = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(testResult.length, 2);
assertEqual(testResult[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(testResult[1], "Labs"); // ensure second element is "Labs"
console.log("=== test result 2 ===");
const testResult2 = tail([5, 6, 8, 10], [6, 8, 10]);
assertEqual(testResult2.length, 3);
assertEqual(testResult2[0], 6);
assertEqual(testResult2[1], 8);
assertEqual(testResult2[2], 10);

