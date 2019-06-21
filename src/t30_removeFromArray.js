/* eslint-disable no-plusplus */
// eslint-disable-next-line linebreak-style

const arr = ['el 1', 'el 2', 'el 3', 'el 4', 'el 5', 'el 6', 'el 7', 'el 8', 'el 9', 'el 0']

while (arr.length > 0) {
  const removed = arr.splice(0, 1)

  console.log(`remove: ${removed}`)
  console.log(`array length: ${arr.length}`)
}

console.log(`array: ${arr}`)
