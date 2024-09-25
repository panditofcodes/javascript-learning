const person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
