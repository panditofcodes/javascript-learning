numArr = [13, 2, 3, 8, 9];

let maxSub = 0;
let currSub = 0;
let currValue = 0;

for (let i = 0; i < numArr.length; i++) {
  currValue = numArr[i];

  for (let value of numArr) {
    currSub = Math.abs(currValue - value);
    maxSub < currSub ? (maxSub = currSub) : maxSub;
  }
}

console.log(`Max possible sum: ${maxSub}`);
