

//const fivesData = [5, 10, 15, 20, 25, 30, 35, 40, 45]

// /*const takeUntil = function(array, callback){
//   let results = []
//   for(let i = 0; i < array.length; i++){
//     if(array[i] < 25){
//       callback(array, i)
//     }
//   }
// }
   
// const splice = function(){
//   array.pop(i)
// }


// const result = takeUntil(fivesData, splice())
// console.log(result)*/

// const fivesData = [5, 10, 15, 20, 25, 30, 35, 40, 45]
// const takeUntil = function(array, callback){
//   let results = []
//   //I want it do a for each, and the b
//   array.forEach(function(current, index){
    
//     if(current >= 25){

//       //but it said to pass the current item to the callback....
//       callback(current)
//       //found(count)
//     }
//     //count++;

//   }); 

// }

// const splice = function(){
//   if(current < 25){
//     //push up to that point in the index onto the array
//   }
// }
   
// // const splice = function(){
// //   if(array[i] < 25){
// //     //push up to that point in the index onto the array
// //   }
// // }

// const result = takeUntil(fivesData, splice())
// console.log(result)

const fivesData = [5, 10, 15, 20, 25, 30, 35, 40, 45]

const takeUntil = function (array, callback){
  let result = []

  // for(let i = 0; i < array.length; i++){
  //   let outcome = callback(array[i])
  //   if(outcome == true){
  //     return array.splice(i)
  //   }
  // }

  for(let item of array){
    let outcome = callback(item) //
    if(outcome == true){
      return array.splice(item[i])
    }

  } 

  // for(let i = 0; i < array.length; i++){
  //   let outcome = array[i].callback //not calling correctly....
  //   if(outcome === true){
  //     return array.slice(i)
  //   }

}


const result = takeUntil(fivesData, item => item === 10) //x => x <= will return true when x hits or equals 25 so your call will be takeUntil(fivesData, true)
