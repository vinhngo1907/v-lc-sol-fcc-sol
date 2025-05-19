// function titleCase(str) {
//     return str.toLowerCase().split(" ").map(item => item[0].toUpperCase()+item.slice(1)).join(" ")
// }
function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}

console.log(titleCase("I'm a little tea pot"));