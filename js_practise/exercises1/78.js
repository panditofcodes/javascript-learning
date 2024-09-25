arr = [2,4]

let avl = "No"

if (arr.length==2){
    for (i of arr){
        if (i === 1 || i === 3){
            avl = "Yes"
        }
    }
}

console.log(`Is 1 or 3 avl:  ${avl}`);