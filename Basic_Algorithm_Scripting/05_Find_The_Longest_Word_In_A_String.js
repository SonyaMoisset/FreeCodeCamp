// 05. Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// Solution

function findLongestWord(str) {
  // Step 1. Declare all the variables
	var strSplit = str.split(' '); // We use the split() method to get an array of strings
	var longestWord = 0; // The longest word includes 0 characters at the beginning of the loop
  var i = 0; // Initiate i
  var len = strSplit.length; 

  // Step 2. Create a FOR loop
	for(; i < len; i++){
		if(strSplit[i].length > longestWord){ // If longestWord is less greater than the word it is compared with
		 longestWord = strSplit[i].length; // Then longestWord takes this new value
		}
	}

  //Step 3. Return the longest word
	return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
