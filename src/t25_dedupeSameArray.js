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
{
  name: 'Company3',
  symbol: 'C3',
},
{
  name: 'Company4',
  symbol: 'C4',
},
]

let res = [...new Map(dbArr.map(obj => [JSON.stringify(obj), obj])).values()];

console.log(res)
