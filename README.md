# 📘 Day 1 – MERN + DSA + Core CS Study Log

## 🔥 Topics Covered

### ✅ JavaScript: ES6 Overview, let & const
- **ES6 Overview**
  - Major update to JavaScript (ES2015)
  - Introduced cleaner syntax and features for modern development

- **let**
  - Block-scoped variable declaration
  - Can be reassigned, cannot be redeclared
  ```js
  let counter = 0;
  counter = 1; // ✅

  const

Block-scoped constant declaration

Must be initialized at declaration

Cannot be reassigned (but objects can be mutated)

js
Copy
Edit
const API_KEY = "12345";
// API_KEY = "67890"; // ❌ Error
const user = { name: "Alice" };
user.name = "Bob"; // ✅ Allowed
Interview Highlights:

var vs let vs const

Temporal Dead Zone

Best practice: use const by default

✅ DSA: Arrays Basics
Arrays

Ordered collection of elements

0-based index

Common operations: traversal, insertion, deletion, search

Time Complexities

Operation	Time Complexity
Access by index	O(1)
Insert at end	O(1)
Insert in middle	O(n)
Search	O(n)

5 Practice Problems:

Reverse an array

Find the maximum element

Sum all elements

Check for duplicates

Merge two arrays

js
Copy
Edit
// Example: Reverse an array
function reverseArray(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
Interview Focus:

Two-pointer technique

Space and time trade-offs

Array mutation vs returning new arrays

✅ Core CS: DBMS – Introduction
DBMS Definition:

Software to store, manage, and retrieve data efficiently

Examples: MySQL, PostgreSQL, MongoDB

Key Features:

ACID properties

Concurrency control

Data integrity

Security and authorization

ACID Properties:

Property	Description
Atomicity	All operations complete or none
Consistency	Data remains valid after transactions
Isolation	Transactions do not interfere
Durability	Committed data survives failures

RDBMS vs NoSQL:

Feature	RDBMS	NoSQL
Schema	Fixed schema	Dynamic / flexible
Data Storage	Tables with rows/columns	Collections and documents
Use Case	Structured data	Unstructured / varied data

Interview Questions:

What is a DBMS?

What are ACID properties?

Difference between DBMS and RDBMS?

When to use NoSQL over RDBMS?

Advantages of DBMS over file systems?





  
# 📘 Day 2 – MERN + DSA + Core CS Study Log

## 🔥 Topics Covered

### ✅ JavaScript: Arrow Functions & Template Literals
- **Arrow Functions**
  - Concise syntax for writing functions.
  - Inherit `this` from the parent scope.
  - Cannot be used as constructors.
  - Great for callbacks, especially in array methods (`map`, `filter`, etc.)

  ```js
  const add = (a, b) => a + b;
  const greet = name => `Hello, ${name}`;


  Template Literals

Allows embedded expressions using ${}.

Supports multi-line strings.

js
Copy
Edit
const user = "Navanit";
const welcome = `Welcome, ${user}!`;
✅ DSA: Arrays Practice (5 Problems)
Reverse an Array

Find the Maximum Element

Check for Duplicates

Rotate Array by K

Move Zeroes to End

js
Copy
Edit
// Example: Move Zeroes to End
function moveZeroes(nums) {
  let pos = 0;
  for (let num of nums) {
    if (num !== 0) nums[pos++] = num;
  }
  while (pos < nums.length) nums[pos++] = 0;
}
Key Techniques Used:

Two-pointer technique

Traversal

Array manipulation

✅ Core CS: Operating System (OS) – Introduction
Definition: Software that manages hardware and application programs.

Responsibilities:

Process Management

Memory Management

File Systems

Device Management

Security

Process vs Thread:

Process: Independent execution with separate memory.

Thread: Lightweight, shares memory within a process.

Types of OS:

Batch

Time-Sharing

Real-Time

Distributed

Real-World Use:

Node.js apps run in processes and threads.

Efficient backend development relies on OS-level understanding.


