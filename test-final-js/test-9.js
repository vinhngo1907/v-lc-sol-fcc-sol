//Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
//Lưu ý cho chuỗi 'abcd' :
// 		element    'a'|'b'|'c'|'d'
//		index 	    0	|	1	|	2	|	3
//  n = 1 ------------------- 'acd'
//  n = 2 ------------------- 'abd'
/**
function omitCharAt(str, n) {
  // viết code ở đây.	
  var result ="";
  
  if(n>str.length-1||n<0) return str;
  else{
    var strArr = str.split("");
    for(var i = n; i< str.length-1;i++){
      strArr[i] = strArr[i+1];
    }
    strArr[strArr.length-1]="";
    return strArr.join("");
  }
}
*/
// function omitCharAt (s,n){
//     var arr = []
//     for(var i of s){
//         arr.push(i);
//     }
//     var str = '';
//     for(var j = 0; j < arr.length; j++){
//         if(n > 0){
//             if(j === n-1){
//                 arr.splice(n,1);
//             }
//         }else if(n === 0 && j===n){
//             arr.splice(0,1);
//         }
//         str += arr[j];
//     }
//     return str;
// }
function omitCharAt(str,n) {
	var arr = str.split('');
	var s = "";
	for(var i = 0; i < arr.length; i++){
		if(i === n){
			arr.splice(i,1);
		}
		s+=arr[i];
	}
	return s
}