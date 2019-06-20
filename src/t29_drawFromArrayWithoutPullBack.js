const companies = [
  { name: 'Company 1', symbol: 'C1' },
  { name: 'Company 2', symbol: 'C2' },
  { name: 'Company 3', symbol: 'C3' },
  { name: 'Company 4', symbol: 'C4' },
]

while (companies.length > 0) {
  const randomPosition = Math.floor(Math.random() * companies.length)
  const removedElement = companies.splice(randomPosition, 1)[0]

  console.log(removedElement)
}

console.log('companies is empty: ', companies)
