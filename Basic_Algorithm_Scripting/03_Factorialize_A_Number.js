// 03. Factorialize a Number
// Return the factorial of the provided integer.

function factorialize(num) {
  return num;
}

factorialize(5, '');


// Solution 1

function factorialize(num) {
  // If num = O OR num = 1, the factorial will return 1
  if (num === 0 || num === 1) {
    return 1;
  } 
  // Else apply the factorial method
  else {
    return num * factorialize(num - 1);
  }
}
  
factorialize(5, '');


// Solution 2

function factorialize(num) {
  // Step 1. Create a variable result 
  var result = num;
  
  // If num = O OR num = 1, the factorial will return 1
  if (num === 0 || num === 1) {
    return 1;
  } 
  
  // Step 2. Create the WHILE loop
  while (num > 1) { 
    num--; // decrementation by 1 
    result *= num; // or result = result * num; (5 * 4 = 20 | 20 * 3 = 60 | 60 * 2 = 120 | 120 * 1 = 120)
  }
  // Step 3. Return the factorial of the provided integer
  return result;
}

factorialize(5, '');
