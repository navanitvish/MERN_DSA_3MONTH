function reverseNumber(n) {
  let isNegative = n < 0;
  n = Math.abs(n);
  let rev = 0;

  while (n > 0) {
    let digit = n % 10;
    rev = rev * 10 + digit;
    n = Math.floor(n / 10);
  }

  return isNegative ? -rev : rev;
}

console.log(reverseNumber(12345));
