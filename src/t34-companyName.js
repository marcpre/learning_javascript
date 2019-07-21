const company = 'eBay (EBAY)'

console.log(`Ticker: ${  company.split('(').pop().split(')')[0]}`)
console.log(`Company: ${  company.split(' (')[0]}`)

