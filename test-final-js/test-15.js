// viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
// newString("1wyg5yhd45", 2) // "1w45"

// function newString(str, n){
//   return str.substr(0, n) + str.substr(str.length-n,n);
// }

function newString(str, n){
	var str1 = str.substring(0,n);
	var str2 = str.substring(str.length-n, str.length);
	var s = str1+str2;
	return s;
}