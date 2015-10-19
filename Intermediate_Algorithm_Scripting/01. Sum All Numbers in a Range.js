// 01. Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them

function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);

// Solution 1

function sumAll(arr) {
  // Step 1. We use the Math.min() method to return the smallest number of the array
  var minimum = Math.min(arr[0], arr[1]); // In this case arr[0] => 1
  
  // Step 2. We use the Math.max() method to return the largest number of the array
  var maximum = Math.max(arr[0], arr[1]); // In this case arr[1] => 4
  
  // Step 3. We need to know all the numbers in the array to return the total
    // We create an empty array that will store the numbers
    var allNumbers = []; // => [1,2,3,4]
    
    // We create a FOR loop that will push each numbers into the empty array
    var num = minimum; // We start will the smallest number of the array
    var len = maximum; 
    
    for (; num <= len; num++) {
      allNumbers.push(num); // Each iteration will push the new number at the end of the empty array
    }
  
  // Step 4. We use the reduce() method to sum all the numbers 
  var sum = allNumbers.reduce(function(a, b) {
    return a + b // => 1 + 2 + 3 + 4
  });  
   
  return sum; // => 10
  
}

sumAll([1, 4]);
