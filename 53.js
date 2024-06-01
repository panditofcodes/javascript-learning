vowels = ["a", "e", "i", "o", "u"];

let i = 0;
let vowelCount = 0;
str = "python";

while (i < str.length) {
  let j = 0;
  while (j < vowels.length) {
    if (str[i] === vowels[j]) {
      vowelCount++;
    }
    j++;
  }
  i++;
}

console.log(vowelCount);
