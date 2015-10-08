// 07. TReturn Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. 

function largestOfFour(arr) {
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Solution

function largestOfFour(arr) {
  // Step 1. Create a variable that will host the result of the 4 sub-arrays
  var largestNumber = [0, 0, 0, 0]; // The provided array will contain exactly 4 sub-arrays
  var i = 0;
  var lenI = arr.length;
  
  // Step 2. Create the first FOR loop to iterate through the arrays
  for(; i < lenI; i++) {
    var j = 0;
    var lenJ = arr[i].length;
  
  // Step 3. Create the second FOR loop to iterate through the sub-arrays
    for(; j < lenJ; j++) {
      if(largestNumber[i] < arr[i][j]) { // In the first iteration arr[0][0], 4 will be the largest number
      // In [4, 5, 1, 3], if arr[i][j] => arr[0][1] => 5 and largestNumber[i] => 4, so 5 will become the largest number
        largestNumber[i] = arr[i][j]; // Then largestNumber takes this new value
      }
    }
  }
  // Step 4. Return the largest numbers of each sub-arrays
  return largestNumber;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
