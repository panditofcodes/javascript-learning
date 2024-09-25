str = "paatpss"

let p = 0

let t = 0 

let i = 0 

while (i<str.length){
    if (str[i]==="p"){
        p++
    }
    if (str[i]==="t"){
        t++
    }
    i++
}

console.log(`P : ${p}\nT:${t}`);