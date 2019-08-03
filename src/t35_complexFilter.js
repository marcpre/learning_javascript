/**
 * Filter array of objects by state and url, whereas url only contains a certain or multiple strings
 */

const attr = ['Product 1', 'Product 2']

const res = []
for (let i = 0; i < attr.length; i++) {
  res.push({
    attr: attr[i],
    url: 'category/',
    state: false,
  }, {
    attr: attr[i],
    url: 'costs/',
    state: false,
  }, {
    attr: attr[i],
    url: 'ownership/',
    state: false,
  }, {
    attr: attr[i],
    url: 'earnings/',
    state: false,
  }, {
    attr: attr[i],
    url: 'price/',
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

const para = 'category'
let currentState = res.filter((el, para) => {
  el.state === false && el.url === para
})

console.log(`Initial state: ${currentState.length}`)
while (currentState.length > 0) {
  currentState[0].state = true
  currentState = res.filter(el => el.state === false)
  console.log(`Set state to true for ${JSON.stringify(currentState[0])}`)
  console.log(currentState.length)
}

console.log('###################DONE#####################')


/*
 * ################
 * #Wanted Output:#
 * ################
 * {
 * attr: 'Product 1',
 * url: 'category/',
 * state: true
 * },
 * {
 * attr: 'Product 2',
 * url: 'category/',
 * state: true
 * }
 */
