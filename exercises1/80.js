function swapFirstAndLast(arr) {
  if (arr.length >= 1) {
    const temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
  } else {
    console.log("Array should have at least one element.");
  }
  return arr;
}

const array = [1, 2, 3, 4, 5];
console.log("Original array:", array);
const swappedArray = swapFirstAndLast(array.slice());
console.log("Array after swapping first and last elements:", swappedArray);
