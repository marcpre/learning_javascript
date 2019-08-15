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
  "name": "Product 3",
  "link": null,
  "category": "22",
  "description": ""
}]

const filteredData = data.filter(({ category }) => category === "22" || category === "234");

console.log(JSON.stringify(filteredData))