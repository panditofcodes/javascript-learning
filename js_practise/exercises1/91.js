numArr = [1,2,3,14,5,]

let currSum = 0
let maxSum = 0

for (let i = 0; i<numArr.length; i++){
    if (i==numArr.length-1) {
        break
    }
    currSum = numArr[i] + numArr[i+1]
    maxSum = Math.max(currSum,maxSum)
}

console.log(maxSum);