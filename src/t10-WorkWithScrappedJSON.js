const fs = require('fs')
const path = require('path')

//const data = JSON.parse(fs.readFileSync(path.join(__dirname, './data/allCoins.json'), 'utf8'))

//console.log(data)

const data = {
  currency: [{},
    {
      Name: 'Euro',
      Url: '/currencies/Euro/',
      Symbol: 'EUR',
      Price: '$76.3'
    },
    {
      Name: 'Dollar',
      Url: '/currencies/dollar/',
      Symbol: 'DOL',
      Price: '$27.61'
    },
    {
      Name: 'Yen',
      Url: '/currencies/yen/',
      Symbol: 'Yen',
      Price: '$638234.60'
    }
  ]
}


const coins = []
data.currency.forEach((cur) => {
  if (cur.Name) {
    coins.push({
      coinname: cur.Name,
      symbol: cur.Symbol,
      price: cur.Price,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  }
})

console.log(coins)