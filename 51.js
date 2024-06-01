str = "python";
subs_str = str.substring(1, str.length - 1);
console.log(str);
console.log(
  `${str[0] + subs_str.split("").sort().join("") + str[str.length - 1]}`
);
