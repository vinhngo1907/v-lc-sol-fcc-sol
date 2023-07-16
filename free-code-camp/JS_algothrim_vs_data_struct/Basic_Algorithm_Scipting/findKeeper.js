// function findElement(arr, func) {
//     // one of each element in arr to find(predicate) => loop until predicate true
//     return arr.find()
// }

function findElement(arr, func){
    /**
     * in to get index arr
     * of to get value arr
     */
    for(let ele of arr){
        if(func(ele)){
            return ele;
        }
    }
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));