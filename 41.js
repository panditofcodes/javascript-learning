num1 = 10;
num2 = 15;
num3 = 20;

if (num1 < num2 && num2 < num3) {
  console.log("Strict Mode.");
} else {
    if(((num1===num2) || (num2 === num3))){
        console.log("Soft Mode.");
    }
}
