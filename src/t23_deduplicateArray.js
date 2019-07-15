const arr = [{
  id: 1,
  name: 'Company1',
  symbol: 'C1',
},
{
  id: 2,
  name: 'Company2',
  symbol: 'C2',
},
{
  id: 3,
  name: 'Company3',
  symbol: 'C3',
},
{
  id: 4,
  name: 'Company4',
  symbol: 'C4',
},
{
  id: 5,
  name: 'Company1',
  symbol: 'C1',
},
{
  id: 6,
  name: 'Company3',
  symbol: 'C3',
},
]

const res = Object.values(arr.reduce((acc, cur) => Object.assign(acc, {
  [cur.name]: cur,
}), {}))

console.log(res)
