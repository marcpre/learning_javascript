const _ = require('lodash')

let allProducts = [{
        "unique_id": "102",
        "currency": "$",
        "price": "529.99",
        "watt": 150
    },
    {
        "unique_id": "11",
        "currency": "$",
        "price": "323",
        "watt": 150
    },
    {
        "unique_id": "13",
        "currency": "$",
        "price": "23",
        "watt": 77
    }
]

let getWatt =
    _(allProducts)
    .map((objs, key) => ({
        'watt': _.sumBy(objs, 'watt')
    }))
    .value()

console.log(getWatt)
