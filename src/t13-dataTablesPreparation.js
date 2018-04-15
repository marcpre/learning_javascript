const data = {
  "generalInfo": [{
      "title": "title1",
      "permalink": "www.link.com",
      "manufacturer": "manufacturer1",
      "category": [{
        "term_id": 35,
        "name": "Motherboard",
        "slug": "motherboard"
      }],
      "img": "https://images-na.ssl-images-test.com/images/asdfIdR/5adf1vELadfZeiMML.jpg",
      "curreny": "$",
      "price": "64.00",
      "availability": "Usually ships in 24 hours",
    },
    {
      "title": "title2",
      "permalink": "www.link.com",
      "manufacturer": "manufacturer2",
      "category": [{
        "term_id": 35,
        "name": "Motherboard",
        "slug": "motherboard"
      }],
      "img": "https://images-na.ssl-images-test.com/images/I/51adfkLhadsfgACH0L.jpg",
      "curreny": "$",
      "price": "59.99",
      "availability": "Usually ships in 24 hours",
    }
  ]
}

let vals = data.generalInfo.map((item, i) => [i + 1, item.title, item.manufacturer, item.price, item.availability])

console.log(vals);