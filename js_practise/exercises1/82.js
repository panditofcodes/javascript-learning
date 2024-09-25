num1 = 22;
num2 = 99;

add1 = Math.floor((Math.floor(num1 / 10) + Math.floor(num2 / 10))/10)
add2 = Math.floor(((num1%10)+(num2%10))/10)

console.log(`${add1}${add2}`);
