// viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
// function findMax(a,b,c){
// // viết code ở đây.
//   var max = a;
//   if(a > b && a > c){
//     max = a;
//   }else if(a < b && b > c){
//     max = b;
//   }else if(c > a && c > b){
//     max = c;
//   }
//   return max;
// //   console.log(max);
// }


// function findMax(a,b,c){
//     var max = a;
//     if(b > max && c < max){
//         max = b;
//     }else if(b > max && c > max && c < b){
//         max = b;
//     }else if(c > max && b <max){
//         max = c;
//     }else if(c > max && b > max && b < c){
//         max = c;
//     }else{
//         max = a;
//     }
//     return max;
// }

function findMax(a,b,c){
	var arr = [];
	arr.push(a,b,c)
	var max = arr[0]
	for(var i of arr){
		if(i > max){
			max = i
		}
	}
	return max;
}