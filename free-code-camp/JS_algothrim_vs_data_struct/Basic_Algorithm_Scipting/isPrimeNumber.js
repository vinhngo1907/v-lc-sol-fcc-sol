function isPrimeNumber(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }else{
            
        return true;
        }
    }
}

for(let i = 0 ; i < 100; i++){
    if(isPrimeNumber(i)){
        console.log(`${i} is prime number`)
    }else{
        console.log(`${i} is not prime number`);
    }
}