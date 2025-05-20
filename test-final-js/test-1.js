/** 
 * Viết hàm đảo ngược chuỗi
 * Example
 * reverse('abc') // 'cba'
*/

// function reverse(str) {
//   // viết code ở đây.
//   return (str ==='')?'':reverse(str.substr(1)) + str.charAt(0);
// }

// function reverse(chuoi) {
//   var arr = [];
//   for (var i = 0; i < chuoi.length; i++) {
//     arr.push(chuoi[i]);
//   }
//   var newArr = arr.reverse();
//   var s = "";
//   for (var j = 0; j < newArr.length; j++) {
//     s += newArr[j];
//   }
//   return s;
// }

function reverse(str) {
	var arr = [];
	for (var i = str.length - 1; i >= 0; i--) {
		// console.log(str[i])
		arr.push(str[i])
	}
	return arr.join('')
}