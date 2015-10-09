// 08. Confirm the Ending
// Check if a string (first argument) ends with the given target string (second argument)

function end(str, target) {
  return str;
}

end("Bastian", "n", "");

// Solution

function end(str, target) {
  // Step 1. We will use the substr() method to return the characters in a string at a specified location
  // Why substr(-target.length)? => if target.length is negative, substr() starts from the end of the string.
  // Note: we do not use substr(-1) to get the last element because if the target is longer than one letter,
  // the target will not return entirely
  // Here str.substr(-target.length) will return the last index of the string 'Bastian' which is 'n'
  // Then we check if str.substr(-target.length) equals the initial target of the function
    if (str.substr(-target.length) === target)
    
  // Step 2. We return boolean values to check it is true or false
        return true;
    else
        return false;
}

end("Bastian", "n", "");
