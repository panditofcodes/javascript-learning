let str = 'w3resource';

let str_length = str.length;

let r_str = "";

for (let i = str_length-1; i >= 0; i--) {
    r_str = r_str + str[i];
}

console.log(r_str);
