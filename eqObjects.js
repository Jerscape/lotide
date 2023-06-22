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
    for(let elem of object1KeysArr){
      if(object1KeysArr[elem] === object2KeysArr[elem]){
        //I don't think the following line is correctly accessing the values
        //object1[elem] !==  object2[elem]
        let keyValue1 = object1[elem];
        let keyValue2= object2[elem];

        //if(object1["elem"] != object2["elem"])
        if(keyValue1 !==  keyValue2) {

          //return false if not a match
          return false 
        } 


      }

      else{
        //if keys don't match
        return false
      }
      //is this correct?
      //return true
       
    }

  } else {
    //return false immediately if the length of each objects keys array doesn't match
    return false 
  } //end length if 

  return true 
  } // end function

//testing

let testingObject1 = {name: "Juniper", age: "20", occupation: "Student"}
let testingObject2 = {name: "Juniper", age: "20", occupation: "Student"}
let testingObject3 = {name: "Juniper", age: "30", occupation: "Mouse Chaser"}
let testingObject4 = {name: "Jeeves", age: "30"}


//eqObjects(testingObject1, testingObject2)
eqObjects(testingObject1, testingObject3)

