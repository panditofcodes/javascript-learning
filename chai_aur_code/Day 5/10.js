function calSquare(num) {
    return num * num;
}

function calFactorial(num) {
    let factorial = 1;
   
    if (num < 0) return undefined; 
    do {
        factorial *= num; 
        num--; 
    } while (num > 0); 
    return factorial; 
}

function cal(fn1, fn2, num) {
    const sq = fn1(num); 
    const factrl = fn2(sq); 
    console.log(factrl); 
}


cal(calSquare, calFactorial, 5);
