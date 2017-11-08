const fs = require('fs')
const path = require('path')

const bitcoinData = JSON.parse(fs.readFileSync(path.join(__dirname, './data/bitcoinPrice.json'), 'utf8'))
console.log(bitcoinData[1])

// add new attribute to first objects
bitcoinData[1].NewField = 'foo'

// add new attribute to all objects
for (var index = 0; index < bitcoinData.length; index++) {
  bitcoinData[index].NewField = 'foo'
}

// add new attribute to all objects
const date = []
const averagePrice = []
for (var m = 0; m < bitcoinData.length; m++) {
  let price = ( parseFloat(bitcoinData[m].High) - parseFloat(bitcoinData[m].Low) / 2 )
  averagePrice.push(price)
  date.push(Date.parse(bitcoinData[m].Date))
}

console.log(averagePrice)
console.log(date)

console.log(bitcoinData[40])

