// viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 

// function startWith(str){
//   // viết code ở đây.
//   if(str.indexOf('Java')===0) return true;
//   return false;
// }

// function startWith(s){
//     if(s.startsWith('Java'))
//         return true;
//     return false;
// }

function startWith(str) {
	if(str.substring(0,4) === 'Java'){
		return true;
	}
	return false;
}