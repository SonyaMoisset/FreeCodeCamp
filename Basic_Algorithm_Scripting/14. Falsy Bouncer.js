// 14. Falsy Bouncer
// Remove all falsy values from an array.

function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);

// Solution

function bouncer(arr) {
  // We run filter on the array and pass it a function
  return arr.filter(Boolean);
  
  // If is returns true, then the element is passed to the new created array; if not, it's been filtered out
  
  // In this case, Boolean is a constructor function
  // It will return true/false depending if it was passed a “truthy” or a “falsy” 
  // We give it each element of the array, and it only returns the ones that aren’t “falsys”
  // Falsy values in javascript are false, null, 0, "", undefined, and NaN.
  // In this case, it returns [7, "ate", 9]
}

bouncer([7, "ate", "", false, 9]);
