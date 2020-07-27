const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age} years old.`
    this.likes.forEach(like => {
        bio += ` ${this.firstName} likes ${like}`
    })
    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Arun', 'Singh', 10, ['Reading','Playing'])
me.setName('Alex Singh')
console.log(me.getBio())

const wife = new Person('Pushpa', 'Yadav', 5)
console.log(wife.getBio())