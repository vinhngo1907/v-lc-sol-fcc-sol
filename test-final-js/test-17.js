/* Write a function return maximum possible sum of some of its k consecutive numbers 
(numbers that follow each other in order.) of a given array of positive integers
*/

function maxOfSumChain(arr,k){
	// write code here.
	var sums=0,temp=0;
	for(var i = 0 ; i<=arr.length-k;i++){
	  for(var j = i; j < i+k; j++){
		temp += arr[j];
	  }
	  if(sums<temp) sums=temp;
	  temp = 0;
	}
	return sums;
  }
  