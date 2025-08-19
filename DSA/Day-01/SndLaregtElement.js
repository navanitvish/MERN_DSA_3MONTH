// Find the Second Largest Element in Array using for loop
// ✅ Task 2: Find the Second Largest Element in Array
// 🔹 Problem

// Given an array, return the second largest element.

// 🔹 Approach

// Traverse once, track largest and secondLargest.

// Update while checking each element.

// 🔹 Code

function findSecondLargest(arr) {
    let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const secondLargest = findSecondLargest(arr);
console.log("Second largest element:", secondLargest);


// Find the Second Largest Element in Array using for of  loop
function SecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

// Test
console.log(SecondLargest([10, 20, 5, 8, 25])); // 20
console.log(SecondLargest([5, 5, 5])); // null



// Dry Run
        // arr = [10, 20, 5, 8, 25]

        // num=10 → largest=10, second=-∞
        // num=20 → largest=20, second=10
        // num=5  → no change
        // num=8  → no change
        // num=25 → largest=25, second=20


