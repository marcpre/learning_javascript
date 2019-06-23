const ticker = ['AAPL', 'MSFT']
const mbeatUrlEndings = ['price-target/?MostRecent=0', 'insider-trades/', 'institutional-ownership/', 'earnings/', 'dividend/']


const res = []
for (let i = 0; i < ticker.length; i++) {
  res.push({
    ticker: ticker[i],
    url: 'price-target/?MostRecent=0',
    state: false,
  }, {
    ticker: ticker[i],
    url: 'insider-trades/',
    state: false,
  }, {
    ticker: ticker[i],
    url: 'institutional-ownership/',
    state: false,
  }, {
    ticker: ticker[i],
    url: 'earnings/',
    state: false,
  }, {
    ticker: ticker[i],
    url: 'dividend/',
    state: false,
  })
}

console.log(JSON.stringify(res))

function setState(res, state) {
  res.state = state
}

function getState(res) {
  return res.state
}

setState(res[1], true)

console.log(getState(res[2]))
console.log(getState(res[1]))

console.log(JSON.stringify(res))

/*
 * {
 * ticker: 'AAPL',
 * url: 'price-target/?MostRecent=0',
 * state: true // for successfully scrapped
 * },
 * {
 * ticker: 'AAPL',
 * url: 'insider-trades/',
 * state: false // for successfully scrapped
 * }
 */
