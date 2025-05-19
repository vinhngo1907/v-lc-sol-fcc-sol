/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
    var arrNew = [];
    var a = arr.reduce(function(a,b){
      a[b] = a[b]+1 || 1;
      return a;
    },{});
    var max = 0;
    for(var key in a){
      var c = a[key];
      if(c > max) max = c;
     
    }
    for(let key in a){
      let c = a[key];
       if(c === max) arrNew.push(key);
    }
    return arrNew.map(function(x){
      return parseInt(x);
    });
  }