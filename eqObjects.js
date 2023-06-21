//assert equals 

const assertEqual = function(actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `Assertion Failed: ${actual} != ${expected}`;
  }

  console.log(message);
};


//eqObject

const eqObjects = function(object1, object2){
  
  //so basicaly my approach will be to create 4 arrays. 
  //1 array for each objects keys (2 total)
  //1 array for each objects values (2 total)

  //first I will then compare length. If they aren't equal, it will immediately return false
  //then if they are equal, I will assess each key by index against eachother
  //if any do not match, it will immediatley return false
  //then if they match, I will compare each arrays keys by index against eachother
  //if any don't match, it will immediatley return false
  //otherwise if all the values match, it will return, as at this point, the length, keys, and values ALL match

  let object1KeysArr = Object.keys(object1)
  let object2KeysArr = Object.keys(object2)
  let object1ValuesArr = Object.values(object1)
  let object2ValuesArr = Object.values(object2)

  //test key array length
  if(object1KeysArr.length === object2KeysArr.length){
    //if the length matches, compare keys?
    for(let i = 0; i < object1KeysArr.length; i++){
      if(object1KeysArr[1] !== object2KeysArr[i]){
        return false

      } else {
        //if the keys index to index matches, compare value to value
        for (let j = 0; j < object2ValuesArr.length; j++) {
          if (object1ValuesArr[j] !== object2ValuesArr[i]) {
            return false

          } else {
            return true
          }

        }//end last for loop

      }// end length else

    }// end initial (outer) for loop

  } else {
    //return false immediately if the length of each objects keys array doesn't match
    return false 
  }

};




//testing
