class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    display() {
        console.log(this.firstName + " " + this.lastName);
    }
}

// answer:
// https://stackoverflow.com/questions/55686178/call-class-directly-and-not-via-instance-variable#55686178

// exports the Person object as object
/* 
module.exports = {
    Person
};
*/

module.exports = Person
