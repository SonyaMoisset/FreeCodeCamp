// 06. Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot", "");

// Solution

function titleCase(str) {
  // Step 1. Lowercase the string with the toLowerCase() method
  str = str.toLowerCase();
  
  // Step 2. Split the string with the split() method
  str = str.split(" ");
  
  // Step 3. Create a FOR loop to iterate through all the strings in the new array
  var i = 0;
  var len = str.length; 
  
  for (; i < len; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    // str[i] represents each strings in the array => str[0] = "i'm" => str[0].charAt(0) = "i"
    // a. Select the first character at index 0 with chartAt(0) of the current word, 
    // then uppercase this first character with the toUpperCase() method 
    // => str[0].charAt(0).toUpperCase() = "I"
    // b. The slice() method will return every character of the word starting from index 1
    // str[0] = "i'm" => str[0].slice(1) = "'m"
    // c. We concatenate both results to get the title case word => "I" + "'m" = "I'm"
  }
  
  // Step 4. Join back the string with the join() method and return the output
  return str.join(" ");
}

titleCase("I'm a little tea pot", "");
