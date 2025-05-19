/*
Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu só đó và 13, 
nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.
Example: 
n = 20 // return 14
n = 5 // return 8
*/

function difference(numb){
	return (numb>13)?(Math.abs(numb-13)*2):Math.abs(numb-13)
}