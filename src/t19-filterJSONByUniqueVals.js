const axios = require('axios')
const _ = require('lodash')

axios.get('https://whattomine.com/calculators.json')
  .then(response => {
    const coins = response.data.coins
    const result = _.uniq(_.map(coins, item => item.algorithm))
    console.log(result)
  })