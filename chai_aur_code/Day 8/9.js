const prop1 = 'firstName';
const prop2 = 'secondName';
const prop3 = 'greet';

const person = {
    [prop1]: "John",
    [prop2]: "Doe",
    [prop3]: function () {
        return console.log(`Hello, My name is ${this[prop1]} ${this[prop2]}.`)
    }
}

console.log(person)

person[prop3]()