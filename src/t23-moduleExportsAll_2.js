c = require('./t23-moduleExportsAll.js');

const someone = new c.Person("First name", "Last name");
someone.display();

const someAnimal = new c.Animal();

someAnimal.display()