numArr1 = [1,2,3]
numArr2 = [4,5,6]

for (let i = 0; i<numArr1.length; i++){
   for (let j = 0; j<numArr2.length; j++){
    if (numArr1[i]===numArr2[j]){
        console.log(`Match found ${numArr1[i]}`);
        break
    }
   }
}