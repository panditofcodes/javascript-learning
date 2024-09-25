const arr = [1, 3, 6, 2, 5, 10];
const middleIndex = Math.floor(arr.length / 2);
const arr1 = [];
const arr2 = [];
const resultArr = [];
let result1 = 0;
let result2 = 0;

let switchBlock = true;

for (let i = 0; i < arr.length; i++) {
  if (i <= middleIndex - 1) {
    arr1.push(arr[i]);
  } else {
    arr2.push(arr[i]);
  }
}

for (let i = 0; i <= arr.length - 1; i++) {
  if (switchBlock) {
    result1 = result1 + arr[i];
    switchBlock = !switchBlock;
  } else {
    result2 = result2 + arr[i];
    switchBlock = !switchBlock;
  }
}
resultArr[0] = result1;
resultArr[1] = result2;
console.log("Generated Array 1:", arr1);
console.log("Generated Array 2:", arr2);
console.log("Result Arra: ", resultArr);
