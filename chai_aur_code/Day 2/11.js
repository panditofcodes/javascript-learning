num1 = 10;
num2 = 10;
num3 = "10";

if (num1 == num2 && num1 == num3) {
    console.log("verified both condition");
} else {
    console.log("Not Verified");
}

if (num1 === num2 || num1 === num3) {
    console.log("Verified any one condition")
} else {
    console.log("Not Verified")
}