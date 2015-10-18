// 16. Where do I belong
// Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument)

function where(arr, num) {
  return num;
}

where([40, 60], 50);


// Solution

function where(arr, num) {
  // Step 1. We will use the push() method to include num in the array to facilitate the search
    arr.push(num); // The push() method adds the new element to the end of the array
    // We now have [10, 20, 30, 40, 50, 35]
    // And a new length of 6
  
  // Step 2. We use the numerical sort() method to sort the elements in the array
    // To compare numbers instead of strings, the compare function can simply subtract b from a
    // The following function will sort the array ascending (source MDN)
    var sortedArray = arr.sort(function(a, b) {
      return a - b; // We now have [10, 20, 30, 35, 40, 50]
    });

  // Step 3. We use the indexOf() method to return the first index at which num can be found in the array
   return sortedArray.indexOf(num); // In this case the index is 3
}

where([10, 20, 30, 40, 50], 35)
