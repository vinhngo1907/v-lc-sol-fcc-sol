// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
// Example
// capitalize("abc") // "Abc"


// function capitalize(str){
//   var result = str[0].toUpperCase();
//   for(var i = 1 ; i < str.length; i++){
//     if(str[i-1] === ' '){
//       result += str[i].toUpperCase();
//     }else{
//       result += str[i];
//     }
//   }
//   return result;
// }

// function capitalize(s){    
//     var arr = [];
//     arr = s.split(' ');
//     var newStr = '';
//     for(var i = 0 ; i < arr.length; i++){
//         var s1 = arr[i].substr(0,1);
//         var s2 = arr[i].substr(1);

//         newStr = newStr + s1.toUpperCase()+s2+' ';
//     }
//     return newStr.substr(0,newStr.lastIndexOf(' '));
// }

function capitalize(str) {
	var arr = str.split(' ');
	var newArr = [];
	for (var i of arr) {
		var t = i.charAt(0).toUpperCase() + i.substring(1, i[i.length + 1])
		newArr.push(t)
	}
	return newArr.join(' ')
}
