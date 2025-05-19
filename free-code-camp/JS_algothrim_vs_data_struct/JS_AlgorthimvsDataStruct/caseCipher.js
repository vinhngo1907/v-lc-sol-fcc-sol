function rot13(str) {
    let outStr = ""
    for(let i in str){
        if(/[^A-Z]/.test(str[i]))
            outStr += str[i]
        else{
            let index =str[i].charCodeAt(0)+13>90?str[i].charCodeAt(0)+13-26:str[i].charCodeAt(0)+13;
            outStr += String.fromCharCode(index)
        }
    }
    return outStr
}
  
console.log(rot13("SERR PBQR PNZC!"));