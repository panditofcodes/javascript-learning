numArr = [1, 2, 3, 14, 5, 9];

let currSub = 0;
let maxSub = 0;

for (let i = 0; i < numArr.length - 1; i++) {
  currSub = Math.abs(numArr[i] - numArr[i + 1]);
  currSub > maxSub ? (maxSub = currSub) : maxSub;
}

console.log(`Max possible sub: ${maxSub}`);
