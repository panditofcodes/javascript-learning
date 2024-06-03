arr = [10, 23, 54, 76, 25, 37, 82, 76, 23, 43, 12];

console.log(arr);

if (arr[0] > arr[arr.length - 1]) {
  val = arr[0];
  for (i in arr) {
    arr[i] = val;
  }
  console.log(arr);
} else {
    val = arr[arr.length-1]
    for (i in arr){
        arr[i] = val
    }
    console.log(arr);
}
