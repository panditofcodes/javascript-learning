str = "golang"

if (str.length>=3){
    new_sub_str = str.substring((str.length-3),(str.length))
    new_str = `${new_sub_str+str+new_sub_str}`
    console.log(new_str);
}