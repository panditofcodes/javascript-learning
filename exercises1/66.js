str = "javascript"

if (str[0]!=="p" && str[str.length-1]!=="p") {
    console.log(str.substring(1,str.length-1));
} else{
    console.log("out of range");
}