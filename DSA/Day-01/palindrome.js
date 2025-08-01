var isPalindrome = function(x) {
  // Step 1: Negative numbers are never palindromes
  if (x < 0) return false;

  // Step 2: Reverse the number
  let original = x;
  let reversed = 0;

  while (x > 0) {
    let digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  // Step 3: Compare reversed with original
  return reversed === original;
};
console.log(isPalindrome(121));