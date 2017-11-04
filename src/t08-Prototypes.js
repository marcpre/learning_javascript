function Person(first, last, age, eyecolor) {
  this.firstName = first
  this.lastName = last
  this.age = age
  this.eyeColor = eyecolor
}
Person.prototype.nationality = 'English'

Person.prototype.getLastName = function() {
  return this.firstName
}

const testName = new Person('Hans', 'Zimmer', 18, 'blue')

console.log(testName.nationality)
console.log(testName.getLastName())
