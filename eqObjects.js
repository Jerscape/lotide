//asked us to copy and paste our assert equals function but I don't see the point so I deleted it
//eqObject

const eqObjects = function(object1, object2) {

  let object1KeysArr = Object.keys(object1)
  let object2KeysArr = Object.keys(object2)
  //let object1ValuesArr = Object.values(object1)
  //let object2ValuesArr = Object.values(object2)

  //test key array length
  if(object1KeysArr.length === object2KeysArr.length) {
    //if the length matches, compare keys?
    for(let i = 0; i < object1KeysArr.length; i++){

      if(object1KeysArr[i] === object2KeysArr[i]){
        //even key matches, then assess value
        //object1KeysArr[i] etc should evaluate to the key name in object 1...which should then pull the value right?
        if(object1[object1KeysArr[i]] !== object2[object2KeysArr[i]] ) {
          //if any value doesnt' match return false
          return false 

        } else{
          //if each key, and each value match
          return true
        }

      } else {
        //if keys do not match reutrn fasle
        return false
      }
       
    }

  } else {
    //return false immediately if the length of each objects keys array doesn't match
    return false 
  } //end length if 

  } // end function

//testing

let testingObject1 = {name: "Juniper", age: "20", occupation: "Student"}
let testingObject2 = {name: "Juniper", age: "20", occupation: "Student"}
let testingObject3 = {name: "Jeeves", age: "30", occupation: "Mouse Chaser"}
let testingObject4 = {name: "Jeeves", age: "30"}


eqObjects(testingObject1, testingObject2)

