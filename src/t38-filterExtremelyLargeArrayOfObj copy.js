const fs = require('fs')
const path = require('path')

let data = JSON.parse(fs.readFileSync(path.join(__dirname, './data/largeJSONFile.json'), 'utf8'))
// flatten array
data = [].concat.apply([], data);

// get first 1000 elements from array
let res = data.slice(0, 1000);

console.log(res[1])
console.log("Length: " + res.length);

// filter array
res = res.filter(cv => (cv.country === 'us'));

console.log("#################################")
console.log(res[1])
console.log("Length: " + res.length);
