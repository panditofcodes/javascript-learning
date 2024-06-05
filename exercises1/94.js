let numArr = [1, 2, 3, 2, 2, 8, 1, 9];
let mostRepeatedValue = null;
let maxRepetition = 0;

for (let i of numArr) {
  let currentValue = i;
  let repetitionCount = 0;

  for (let j of numArr) {
    if (currentValue === j) {
      repetitionCount++;
    }
  }

  if (repetitionCount > maxRepetition) {
    mostRepeatedValue = currentValue;
    maxRepetition = repetitionCount;
  }
}

console.log(
  `${mostRepeatedValue} is the most repeated value and is repeated ${maxRepetition} times.`
);
