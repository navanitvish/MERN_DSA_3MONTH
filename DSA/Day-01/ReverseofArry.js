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


// for loop
// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// // while loop
// let i =1;

// while(i<=5){
//     console.log(i);
//     i++;
// }

// do while loop
// let i = 1;
// do{
//     console.log("number",i);
//     i++;
// }while(i<=5);

// for of loop
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits){
  console.log("fruit",fruit);
}

// for in loop
let person = {
  name: "John",
  age: 30,
  city: "New York"
};
for (let key in person){
  console.log("key",key);
  console.log("value",person[key]);
  console.log(key,":",person[key])
}


// check prime number
let num=8;
let isPrime = true;
for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i == 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime ? "prime" : "not prime");


// fibonacci series
let n = 5;
let a=0,b=1;
for (let i = 0; i < n; i++) {
  console.log(a);
  let c=a+b;
  a=b;
  b=c;
}




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