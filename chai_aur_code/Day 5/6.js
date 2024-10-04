const checkChar = (str,char) =>{
    if (str.includes(char)){
        return true
    } else {
        return false
    }
}

console.log(checkChar("Hello","h"))