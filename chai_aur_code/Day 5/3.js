function calMax(num1,num2,num3){
    if (num1 > num2 && num1 > num3) {
        console.log(`${num1} is greater.`)
    } else if (num2 > num3 && num2 > num1) {
        console.log(`${num2} is greater.`)
    } else{
        console.log(`${num3} is greater.`)
    }
}

calMax(1,2,3)