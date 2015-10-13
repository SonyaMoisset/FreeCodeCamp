// 12. Chunky Monkey
// Return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {
  return arr;
}

slasher([1, 2, 3], 2);

// Solution

function slasher(arr, howMany) {
  // Step 1. We will use the splice() method on the array
  // The splice() method changes the content of an array by removing existing elements and/or adding new elements

  arr.splice(0, howMany); // Where 0 is the start and howMany is the deleteCount
  // The deleteCount indicates the number of old array elements to remove 
  // If deleteCount is 0, no elements are removed (2nd test case)
  // In this case the deleteCount is 2, so 2 elements are removed
  
  // Step 2. Return the array
  return arr; // In this case, it returns [3]
}

slasher([1, 2, 3], 2);
