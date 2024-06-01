num1 = 23;
num2 = 23;
num3 = 25;

console.log(
  (num1 >= 20 || num2 >= 20 || num3 >= 20) &&
    ((num1 < num2 && num1 < num3) || num2 < num3)
);
