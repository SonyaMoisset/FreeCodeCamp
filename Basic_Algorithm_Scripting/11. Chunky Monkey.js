// 11. Chunky Monkey
// Write a function that splits an array into groups the length of size and returns them as a multidimensional array.

function chunk(arr, size) {
  return arr;
}

chunk(["a", "b", "c", "d"], 2, "");

// Solution

function chunk(arr, size) {
  // Step 1. Create an empty variable chunkMonkey that will store the sliced arrays
  var chunkyMonkey = [];
  var i = 0;
  var len = arr.length;
  
  // Step 2. Create a FOR loop 
  for (; i < len; i = i + size) { // or i += size for the incrementation
    // We need the loop to slice each time according to the size argument => i += 2 in this case
  
  // Step 3. We will use both the push() and the slice() methods
    chunkyMonkey.push(arr.slice(i, i + size)); // the push() method will add the sliced array at the end of the chunkyMonkey array
    // The slice() methods starts at i and ends at i + size
    // At the first iteration, arr.slice() starts at index 0 and ends at index 2 (i + size => 0 + 2) => ["a", "b"]
    // At the second iteration, arr.slice() starts at index 2 and ends at index 4 (i + size => 2 + 2) => ["c", "d"] (index 4 is undefined in this case)
    // At each iteration, arr.slice() doesn't take the stop element
    // In this case, it will be ["a", "b"] not ["a", "b", "c"] => it slices before the stop element
  };
  
  // Step 4. Return the variable chunkyMonkey
  return chunkyMonkey;
}

chunk(["a", "b", "c", "d"], 2, "");
