/* Nested Functions */
function square(num){
    return num*num
}
function hypotaneous(base, perpendicular){
    return Math.sqrt(square(base) + square(perpendicular))
}
result = hypotaneous(4,3)
console.log(result)