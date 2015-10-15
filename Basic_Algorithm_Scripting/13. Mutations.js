// 12. Mutations
// Return true if the string in the first element of the array contains all of the letters of the string 
// in the second element of the array.

function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);

// Solution
function mutation(arr) {
  // Step 1. We lowercase both elements of the array
    var firstElem = arr[0].toLowerCase(); // firstElem is at index 0 in the array
    var secondElem = arr[1].toLowerCase(); // secondElem is at index 1 in the array
  
    var i = 0;
    var len = secondElem.length; // We need to use the length of the second element as the loop termination condition
    // In this case, len = 3

  // Step 2. Create a FOR loop
    for (; i < len; i++) {

  // Step 3. We will use the indexOf() method to check if ALL the letters of the second word is in the first one
      var checkElem = firstElem.indexOf(secondElem[i]) // We store the process into a variable
      
      if (checkElem === -1) // If it equals -1, the character of secondElem was not found in firstElem
        return false; // In this case firstElem.indexOf(secondElem[2]) === -1
        // 'y' is not in 'hello', it returns false

    }
  return true; 
}

mutation(["hello", "hey"]);
