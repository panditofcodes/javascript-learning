str = "swift"

if (str.length>=1){
    new_str = `${str.substring(0,str.length-1)+str[0]}`
    console.log(new_str)
}