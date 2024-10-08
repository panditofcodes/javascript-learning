function product(num1, num2 = 1) {
    return num1 * num2
}

console.log(`With single parameter: ${product(5)}`)
console.log(`With both parameter: ${product(5,2)}`)