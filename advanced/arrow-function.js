const square = num => num * num

console.log(square(5))

const people = [{
    name: 'Arun',
    age: 32
}, {
    name: 'Adwiti',
    age: 5
}, {
    name: 'Arav',
    age: 1
}, {
    name: 'Pushpa',
    age: 31
}]

const under30 = people.filter(person => person.age < 30)
console.log(under30)

//find a person with age 5
//print the name of the person

const equal5 = people.find(person => person.age ===5)
console.log(equal5)