/**
 * Write a function that splits an array (first argument) into groups 
 * the length of size(second argument) and returns them as a two-dimensional array.
 * Example
 * chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]

*/

//Sol 1 
// function chunkArrayInGroups(arr, size) {
//     let out = [], temp = [], j = 1;
//     for (let i = 0; i < arr.length; i++) {
//         if (j <= size) {
//             temp.push(arr[i]);
//             j++;
//         }
//         if (j > size || i == arr.length - 1) {
//             j = 1;
//             out.push(temp);
//             temp = [];
//         }
//     }
//     return out;
// }


// Sol 2
function chunkArrayInGroups(arr, size) {
    var out = [];
    while (arr.length > 0) {
        out.push(arr.splice(0, size));
    }
    return out;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));