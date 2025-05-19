/**
 * Tinh so Fibonacci thu n
 * 
 * @param n: chi so cua so Fibonacci tinh tu 0 
 *           vd: F0 = 0, F1 = 1, F2 = 1, F3 = 2
 * @return So Fibonacci thu n
 */

// sol 1
function fibonacci(n) {
  let f0 = 0, f1 = 1, fn = 1;
  if (n < 0) {
    return -1;
  }

  if (n == 0 || n == 1) {
    return n;
  }
  for (let i = 2; i < n; i++) {
    f0 = f1;
    f1 = fn;
    fn = f0 + f1
  }
  return fn;
}

// sol 2
// function fibonacci(n){
//     if(n < 0){
//         return -1;
//       }

//     if(n == 0 || n ==1){
//         return n;
//     }

//     return fibonacci(n -1 ) + fibonacci(n - 2);
// }

for (let i = 0; i < 5; i++) {
  console.log(fibonacci(i));
}

const number = 5;
let n1 = 0, n2 = 1, nextTerm;
console.log("Fibonacci series: ");

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

console.log(n1);
console.log(n2); 
nextTerm = n1 + n2;
while(nextTerm <= number){
    console.log(nextTerm)
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}