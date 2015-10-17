// 15. Seek and Destroy
// Remove all elements from the initial array that are of the same value as these arguments

function destroyer(arr) {
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Solution

function destroyer(arr) {
  // Step 1. The arguments object is not an Array, we need to convert it into a real Array
  var realArray = Array.prototype.slice.call(arguments); // Refer to MDN documentation
 
  // Step 2.We run the filter() method on the array and pass it a function
  return arr.filter(function(searchElement) {
    
  // Step 3. We will use the indexOf() method  
    return realArray.indexOf(searchElement) === -1; // searchElement is the element to locate in the array
    // We filter out the elements that are on the array and keep the ones that are not
    // In this case, it returns [1,1]
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)
