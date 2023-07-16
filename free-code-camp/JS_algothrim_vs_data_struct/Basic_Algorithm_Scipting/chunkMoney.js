/**
 * sol 1
 * @param {*} arr 
 * @param {*} size 
 * @returns 
 */
// function chunkArrayInGroups(arr, size){
//     let out = [];
//     for(let i = 0; i< arr.length; i++){
//         out.push(arr.slice(i, i + size));
//         // slice not change arr
//         // splcie change arr
//     }
//     return out
// }


/**
 * sol 2
 * @param {*} arr 
 * @param {*} size 
 * @returns 
 */
function chunkArrayInGroups(arr, size) {
    var out = [];
    while (arr.length > 0) {
        out.push(arr.splice(0, size));
    }
    return out;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));