// 10. Truncate a string
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument)

function truncate(str, num) {
  return str;
}

truncate("A-tisket a-tasket A green and yellow basket", 11, "");

// Solution

function truncate(str, num) {
  // We will use the slice() method to truncate the string
  
  // We create the variable len for the length of the string
  var len = str.length;
  
  // Step 1. We use an IF statement to check if len is greater than num
  if (len > num) {
  // If so, we need to return the truncated string with a "..." ending
  // To do so, we use the slice() method to start from index 0 and end at (num - 3)
    str = str.slice(0, num - 3) // => "A-tisket" => In this case, the string length is 8 (num = 11 - 3), starts at index 0 and ends at index 7 
  // The 3 dots at the end add to the string length
    str += "..."; // We have substracted 3 in the slice() method to add the 3 dots => "A-tisket..."
  }
  
  // Step 2. Return the string
  return str;
}

truncate("A-tisket a-tasket A green and yellow basket", 11, "");
