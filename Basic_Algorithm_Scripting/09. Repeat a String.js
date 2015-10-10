// 09. Repeat a string repeat a string
// Repeat a given string (first argument) n times (second argument)

function repeat(str, num) {
  return str;
}

repeat("abc", 3, "");

// Solution

function repeat(str, num) {
  // We will use an if/else if/else statement to check each case and the repeat() method to repeat the string
  // Step 1. If the number equals 0, return the string 
  if (num === 0) {
    return str;
  }
  
  // Step 2. If the number is positive, return the string n times with the repeat() method
  else if (num > 0) {
    return str.repeat(num);
  }
  
  // Step 3. If the number is negative, return an empty string
  else {
    return "";
  }
}

repeat("abc", 3, "");
