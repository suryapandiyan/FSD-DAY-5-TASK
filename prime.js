// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    
   function isPrime(num) 
 {
  if (num <= 1) 
  {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(arr) {
  return arr.filter((num) => isPrime(num));
}
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11]
 const primes = getPrimes(numbers);
 console.log(primes); // Output: [2, 3, 5, 7,11]


 

   
});