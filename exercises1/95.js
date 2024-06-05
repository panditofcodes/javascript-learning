function replaceValue(numArr, currVal, newVal) {
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === currVal) {
      numArr[i] = newVal;
    }
  }
  return numArr;
}

arr = [1, 2, 3, 2, 2, 8, 1, 9]

console.log(replaceValue(arr,2,5))
