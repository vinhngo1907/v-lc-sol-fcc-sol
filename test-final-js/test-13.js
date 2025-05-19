/* Viết hàm pyString để tạo chuỗi mới thêm "Py" trước chuỗi nhập vào. 
Nếu chuỗi đã cho đã bắt đầu bằng "Py" thì hãy trả về chuỗi gốc (không cần thêm).
Tham số:
- String: chuỗi nhập vào lúc đầu.
*/

// function pyString(String) {
//   var str = String.split('');
//   if(String.substr(0,2) === "Py")
//     return String;
//   str.unshift("Py");
//   return str.join("");
// }

function pyString(str){
	// if(str.substring(0,2) === "Py"){
	// 	return str;
	// }else{
	// 	return "Py"+str;
	// }
	return (str.substring(0,2) === "Py")?str:("Py"+str)
}