const _ = require('lodash')

const obj = {
    "2": {
        "title": "GeForce GTX 1070 SC GAMING ACX 3.0 Black Edition",
        "category": [{
            "term_id": 34,
            "name": "Graphic Card",
            "slug": "graphic-card",
            "term_group": 0,
        }],
        "currency": "$",
        "price": "547.85",
        "watt": "0",
    },
    "3": {
        "title": "GeForce White Edition",
        "category": [{
            "term_id": 32,
            "name": "Graphic Card",
            "slug": "graphic-card",
            "term_group": 0,
        }],
        "currency": "$",
        "price": "600.85",
        "watt": "0",
    }
}

let allGpuParts = _.pickBy(obj, (value, key) => {
    return _.startsWith(key.category, "graphic-card")
})

console.log("allGpuParts")
console.log(allGpuParts)