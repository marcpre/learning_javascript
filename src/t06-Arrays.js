
const people = ["Habs", "Brad", "Peter", "Joel"]

//get last
const last = people[people.length - 1]
console.log(last)

//loop over an array
people.forEach(function(item, index, array) {
  console.log(item, index);
})

//find in an array
const filteredArray = people.filter((people)=> {
    return people.length > 4
})

console.log(filteredArray)
