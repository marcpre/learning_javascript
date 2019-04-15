class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    display() {
        console.log(this.firstName + " " + this.lastName);
    }
}

class Animal {
    constructor() {
        this.type = "Animal";
    }

    display() {
        console.log(this.type);
    }
}

module.exports = {
    Person,
    Animal
};