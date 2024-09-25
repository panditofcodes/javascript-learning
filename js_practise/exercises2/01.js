let student = {
    rollNo: Number,
    name: String,
    age: Number,
}



let objStudent1 = {
  rollNo: 1000,
  name: "Piyush Shukla",
  age: 24,
};

let objStudent2 = {
  rollNo: 1000,
  name: "ABC",
  age: 24,
};

console.log(
  Object.keys(objStudent1).every(
    (key) =>
      objStudent2.hasOwnProperty(key) && objStudent2[key] === objStudent1[key]
  )
);
