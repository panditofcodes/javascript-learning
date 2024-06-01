num1 = 10;
num2 = 10;
num3 = 1;

if (num1 === num2 && num1 === num3) {
  console.log("30");
} else if (
  (num1 === num2 && num1 === num3) ||
  (num2 === num3 && num1 === num3)
) {
  console.log("40");
} else {
  console.log("20");
}
