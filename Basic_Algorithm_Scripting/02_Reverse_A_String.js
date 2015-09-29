// 02. Reverse a String
// Reverse the provided string.

function reverseString(str) {
  return str;
}

reverseString("hello", "");


// Solution

function reverseString(str) {
  // Step 1. Use the split() method to return a new array.
  var splitString = str.split("");
  
  // Step 2. Use the reverse() method to reverse the new array
  var reversedArray = splitString.reverse();
  
  // Step 3. Use the join() method to join all elements of the array into a string.
  var joinedArray = reversedArray.join("");
  
  // Step 4. Return the reversed string
  return joinedArray;
}

reverseString("hello", "");


// Chaining methods
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello", "");
