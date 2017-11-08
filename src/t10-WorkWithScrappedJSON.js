const fs = require('fs')
const path = require('path')

const data = JSON.parse(fs.readFileSync(path.join(__dirname, './data/allCoins.json'), 'utf8'))

console.log(data.currency)