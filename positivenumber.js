const number = parseFloat(prompt("Enter a number:"));
if (number > 0) {
  console.log(`${number} is a positive number.`);
} else if (number < 0) {
  console.log(`${number} is a negative number.`);
} else {
  console.log(`${number} is zero.`);
}