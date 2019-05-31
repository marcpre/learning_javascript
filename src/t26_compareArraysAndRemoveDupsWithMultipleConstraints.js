const dbArr = [{
  name: 'Company1',
  symbol: 'C1',
  ratingID: '1',
  stockID: '2'
},
{
  name: 'Company2',
  symbol: 'C2',
  ratingID: '1',
  stockID: '2'
},
{
  name: 'Company3',
  symbol: 'C3',
  ratingID: '1',
  stockID: '2'
},
{
  name: 'Company4',
  symbol: 'C4',
  ratingID: '1',
  stockID: '2'
},
]

const diffArr = [{
  name: 'Company1',
  symbol: 'C1',
  ratingID: '1',
  stockID: '2'
},
{
  name: 'Company6',
  symbol: 'C6',
  ratingID: '1',
  stockID: '2'
},
{
  name: 'Company1',
  symbol: 'C1',
  ratingID: '5',
  stockID: '3'
},
{
  name: 'Company10',
  symbol: 'C10',
  ratingID: '1',
  stockID: '2'
},
]

const res = diffArr.filter(cv => !dbArr.find(e => e.name === cv.name && e.ratingId === cv.ratingId && e.stockId === cv.stockID));

console.log(res)
