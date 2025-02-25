//Palindromes
//if the reverse string is equal to the orighinal one then that word is a palindrome

const palindrome = (str) => {
   return str.split("").reverse().join("") === str
}
console.log(palindrome("hesSASSadasdsallo"));
console.log(palindrome("cddcdsads"));
