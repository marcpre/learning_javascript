const people = ['Habs', 'Brad', 'Peter', 'Joel']

// get last
const last = people[people.length - 1]
console.log(last)

// loop over an array
people.forEach((item, index, array) => {
  console.log(item, index)
})

// find in an array
const filteredArray = people.filter(people => people.length > 4)
console.log(filteredArray)

// add to a beginning of an array
const beginning = people.unshift("baz", "test")
console.log(beginning.toString())

// Add Element(s) to the Middle of an Array
const middle = people.splice(3, 0, "foo", "bar")
console.log(middle)
