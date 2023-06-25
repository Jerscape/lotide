const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `Assertion Failed: ${actual} != ${expected}`;
  }

  console.log(message);
};

//find key function

const findKey = function(object, callback){

  for(let item in object){
    let kValue = object[item]


    }
    if(typeof(kValue) === "object"){
          //if the value is an ojbect (which it is in the testing example)
      for(let elem in kValue){
        let innerKValue = kValue[elem]
        let outcome = callback(kValue[innerKValue])

        if(outcome === true){
        return innerKValue
        }0
      } //end for

    //if not a object of object values
    } else {
      
    }

  }





//testing 
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3) // => "noma"
