
function helloWorld () {
  console.log('Hallo Welt!')
}

console.log(module.filename)
console.log(module.id)
console.log(module.exports)

module.exports = {
  helloWorld,
}
