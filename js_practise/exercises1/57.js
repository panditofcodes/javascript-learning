str = "python"

copies = 3

if (str.length >= 3){

    newStr = str.substring(str.length-3) 

    console.log(newStr.repeat(copies));
}