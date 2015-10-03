// 04. Check for Palindromes
// Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
  return true;
}

palindrome("eye");

// Solution 1

function palindrome(str) {
  // Step 1. Use RegExp to remove unwanted characters from the string + lowercase the string
  var regLowStr = str.replace(/[\W_]/g, '').toLowerCase(); //or var regLowStr = str.replace(/[^A-Za-z0-9_]/g, '').toLowerCase();
  
  // Step 2. Use the chaining methods from 02. Reverse a String
  var reverseStr = regLowStr.split('').reverse().join('');
  
  // Step 3. Check if reverseString is strictly equals to lowerString 
  return reverseStr === regLowStr;
}

palindrome("eye");
