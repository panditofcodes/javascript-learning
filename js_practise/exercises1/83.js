strArr = ["a", "aa", "aaa", "aaaaa", "aaaa"];

let longestStr = strArr[0];

for (i in strArr) {
  if (strArr[i].length > longestStr.length) {
    longestStr = strArr[i];
  }
}

console.log(`Longest String: "${longestStr}"`);
