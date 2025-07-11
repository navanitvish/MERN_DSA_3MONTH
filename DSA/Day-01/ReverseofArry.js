// Concepts to Learn:

// What is an array?
// ➤ A collection of elements stored in contiguous memory.

// How to declare an array in JavaScript:

// javascript
// let arr = [1, 2, 3, 4];
// Array traversal:

// javascript
// Copy
// Edit
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// Basic methods:

// push(): add to end

// pop(): remove from end

// shift(): remove from start

// unshift(): add to start

// slice(), splice()

// Time Complexity of common operations

// ✅ Practice Problems:

// 🔹 Problem 1: Reverse Array

// Input: [1,2,3,4,5]

// Output: [5,4,3,2,1]

// Solution (2-pointer approach):

// javascript
// Copy
// Edit
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
console.log(reverseArray([1,2,3,4,5]));