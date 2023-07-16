let catName;
let quote;
function catTalk(){
    // enable strict Mode catch common mistake and unself action 
    "use strict" 
    catName = "Oliver";
    quote = catName + " say Meow!";
    return quote;
}

console.log(catTalk());

// let can not redeclare but var can 