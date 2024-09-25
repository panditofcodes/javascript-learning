gnum = 3
i=1
while (i>0) {
    num = Math.ceil(Math.random() * 10)
    if (gnum === num){
        console.log("Good Work!")
        break
    }
    console.log(num)
}
