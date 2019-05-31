const dbArr = [{
  name: 'Company1',
  symbol: 'C1',
},
{
  name: 'Company2',
  symbol: 'C2',
},
{
  name: 'Company3',
  symbol: 'C3',
},
{
  name: 'Company4',
  symbol: 'C4',
},
]

const diffArr = [{
  name: 'Company1',
  symbol: 'C1',
},
{
  name: 'Company6',
  symbol: 'C6',
},
{
  name: 'Company1',
  symbol: 'C1',
},
{
  name: 'Company10',
  symbol: 'C10',
},
]

const res = diffArr.filter(cv => !dbArr.find(e => e.name === cv.name))

console.log(res)
