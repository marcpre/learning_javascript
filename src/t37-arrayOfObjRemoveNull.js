let data = [{
  "name": "Product 2",
  "link": "/stock/product2",
  "category": "234",
  "description": ""
}, {
  "name": "Product 1",
  "link": "/stock/product1",
  "category": "1231",
  "description": ""
}, {
  "name": "",
  "link": null,
  "ticker": "",
  "description": ""
}]

data = data.filter(cv => !(cv.name === "" && cv.link === null));

console.log(JSON.stringify(data))