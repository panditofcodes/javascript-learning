str = "swift"

if (str.length >=1){
    new_str = `${str[str.length-1]+str.substring(1,(str.length - 1))+str[0]}`
    console.log(new_str)
}