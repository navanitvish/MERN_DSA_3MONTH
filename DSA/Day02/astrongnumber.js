
// 🧠 Concept:
// A number is Armstrong if the sum of each digit raised to the power of total digits equals the number.

// 📌 For 3-digit:
// 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153 → true



function isArmstrong(num) {
  const digits = num.toString().split('');
  const power = digits.length;
  const sum = digits.reduce((acc, d) => acc + Math.pow(+d, power), 0);
  return sum === num;
}

console.log(isArmstrong(153));