class Person {
    constructor(firstname, lastname, age) {
        this._firstname = firstname
        this._lastname = lastname
        this._age = age
    }

    get firstname() {
        return this._firstname.toUpperCase();
    }

    set firstname(name) {
        this._firstname = name;
    }

    get lastname() {
        return this._lastname
    }

    set lastname(lastnm) {
        this._lastname = lastnm
    }

    get age() {
        return this._age
    }

    set age(a) {
        this._age = a
    }

}

p = new Person()

p.firstname = "lol"
p.age = 11

console.log(p.firstname + " " + p.age);
console.log(p.toString());