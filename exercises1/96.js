function sumOfAbsDf(numArr){
    let sum = 0 
    for (let i = 0; i<numArr.length-1; i++){
        sum = sum + (Math.abs(numArr[i]-numArr[i+1]))
    }

    return sum
}

console.log(sumOfAbsDf([1, 2, 3, 2, -5]));