arr1 = [10, 20, 30];
arr2 = [10, 20, 30];

let isEqual = "No";

if (arr1.length === arr2.length) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      isEqual = "Yes";
    } else {
      isEqual = "No";
    }
  }
  console.log(`Is array equal: ${isEqual}`);
} else {
  console.log("unequal array");
}
