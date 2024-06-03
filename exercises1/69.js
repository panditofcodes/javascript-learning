arr = [3,4,5]
newArr = []

let i = arr.length-1
let j = 0
for (i; i>=0; i--){
    newArr[j] = arr[i]
    j++
}

console.log(arr);
console.log(newArr);