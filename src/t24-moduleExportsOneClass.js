const { Person } = require('./t23-moduleExportsAll.js');
// Person = require('./t23-moduleExportsAll.js');

const someone1 = new Person("First name", "Last name"); // <-- does work
someone1.display();

/*
const someone = new Person("First name", "Last name"); // does work
someone.display();
*/