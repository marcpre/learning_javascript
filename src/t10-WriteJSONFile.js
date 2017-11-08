const fs = require('fs')

let array = []
for (var i = 1; i < 100; i++) {
    array.push(i)
}

fs.writeFile('../data/file.json', array, 'utf8', (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('The file was saved!')
})
