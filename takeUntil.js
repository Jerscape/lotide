

// 

const fivesData = [5, 10, 15, 20, 25, 30, 35, 40, 45]

const takeUntil = function(array, callback){

    let result = callback()
    return result 

}

x => x <= 25
const result = takeUntil(fivesData, function())
console.log(result)