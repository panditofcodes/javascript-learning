let name = "John Doe"
let age = 21

const person = {
    name,
    age,
    print: function () {
        return console.log(`Age of ${this.name} is ${this.age}.`)
    }
}

console.log(person)
console.log(`Name: ${person.name}`)
person.print()
