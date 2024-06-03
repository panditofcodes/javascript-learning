str = "abcdefg"

if (str.length%2!=0){
    mid = (str.length+1)/2

    console.log(str.substring(mid-2,mid+1));
}