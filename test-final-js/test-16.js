/* Write a function that splits an array (first argument) into groups 
the length of size(second argument) and returns them as a two-dimensional array.
Example
 chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/
function chunkArrayInGroups(arr, size){
	var temp = [], kq=[],j=1;
	for(var i = 0 ; i < arr.length;i++){
	  if(j <= size){
		temp.push(arr[i]);
		j++
	  }
	  if(j > size || i==arr.length-1){
		j = 1;
		kq.push(temp);
		temp = [];
	  }
	}
	return kq;
  }