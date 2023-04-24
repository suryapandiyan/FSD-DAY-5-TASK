
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    
   function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

function getPalindromes(arr) {
  return arr.filter((str) => isPalindrome(str));
}
const words = ["racecar", "hello", "mom", "level", "world"];
const palindromes = getPalindromes(words);
console.log(palindromes);  

   
});