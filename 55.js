function division_string_format(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    let result = number1 / number2;
    let formattedResult = result.toLocaleString(undefined, {maximumFractionDigits: 2});
    return formattedResult;
}

let dividend = 1000000;
let divisor = 107;
let result = division_string_format(dividend, divisor);
console.log("Result: " + result);
