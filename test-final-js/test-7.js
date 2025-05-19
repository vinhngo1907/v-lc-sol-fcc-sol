//Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

// function equal_pt(str){ 
//  var count = 0, result = 0;
//  if(str === ""){
//   return true;
//  }else{
//   for(var i = 0; i < str.length;i++){
//     if(str.charAt(i)==='t') count++;
//     if(str.charAt(i)==='p') result++;
//   }
//   return count === result;
//  }
// }

// function equal_pt(s){
//     var sl_p = 0;
//     var sl_t = 0;
//     for(var i = 0; i < s.length; i++){
//         if(s[i] === 'p')
//             sl_p++;
//         if(s[i] === 't')
//             sl_t++;
//     }
//     if(sl_p === sl_t)
//         return true;
//     else
//         return false;
// }

function equal_pt(str) {
	var p = 0;
	var t = 0;
	for(var i of str){
		if(i === 't'){
			t++;
		}
		if(i === 'p'){
			p++;
		}
	}
	if(t === p){
		return true
	}
	return false;
}