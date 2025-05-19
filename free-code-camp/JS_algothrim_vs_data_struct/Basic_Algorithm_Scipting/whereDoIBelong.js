// function getIndexToIns(arr, num) {
//     arr.push(num)
//     arr.sort((a,b)=>a-b);
//     return arr.indexOf(num)
// }
function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
}

console.log(getIndexToIns([], 1));