arr = [0, 1, 2, 30,30, 4, 5, 6, 7, 8, 9];

let count30 = 0;
let count40 = 0;

if (arr.length === 0 || arr.length === 1 || arr.length === 2) {
  console.log("Inavlid Values!");
} else {
  for (i of arr) {
    if (i === 30) {
      count30++;
    }
    if (i === 40) {
      count40++;
    }
  }
}

console.log(`30 is ${count30} times.`);
console.log(`40 is ${count40} times.`);
