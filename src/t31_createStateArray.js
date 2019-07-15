const ticker = ['AAPL', 'MSFT']

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

/* console.log(JSON.stringify(res))
 */

function setState(obj, bool) {
  obj.state = bool
}

function getState(res) {
  return res.state
}

setState(res[1], true)

/* console.log(getState(res[2]))
console.log(getState(res[1]))

console.log(JSON.stringify(res)) */

let currentState = res.filter(el => el.state === false)
console.log(`Initial state: ${  currentState.length}`)
// let i = 0
while (currentState.length > 0) {
  currentState[0].state = true
  currentState = res.filter(el => el.state === false)
  console.log(`Set state to true for ${JSON.stringify(currentState[0])}`)
  console.log(currentState.length)
  // i++
}

console.log('###################DONE#####################')


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
