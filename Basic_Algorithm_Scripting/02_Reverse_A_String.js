// 02. Reverse a String
// Reverse the provided string.

function reverseString(str) {
  return str;
}

reverseString("hello", "");


// Solution 1

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


// Chaining the three methods together
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello", "");


// Solution 2

function reverseString(str) {
// Step 1. Create an empty string that will host the new created string
  var newString = "";

// Step 2. Create the FOR loop 
  for (var i = str.length - 1; i >= 0; i--) { // The starting point will be the last character of the string
    newString = newString + str[i]; //or newString += str[i];
  }

// Step 3. Return the reversed string
  return newString;
}
 
reverseString('hello');
