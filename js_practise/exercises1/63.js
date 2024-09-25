str1 = "python"
str2 = "js"

if (str1.length!=str2.length){
    if (str1.length>str2.length) {
        console.log(str1.substring(str1.length-str2.length)+str2);
    } else {
        console.log(str1+(str2.substring(str2.length-str1.length)));
    }
} else{
    console.log(str1+str2);
}