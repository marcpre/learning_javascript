let data = [{
  "id": 1,
  "name": "Product 1",
  "status_date": "2019-05-06T22:00:00.000Z",
  "supplier": "Supplier 1",
  "status_from": "Not Available",
  "status_to": "Buy",
},{
  "id": 2,
  "name": "Product 2",
  "status_date": "2019-05-06T22:00:00.000Z",
  "supplier": "Supplier 2",
  "status_from": "Buy",
  "status_to": "Buy",
},{
  "id": 3,
  "name": "Product 3",
  "status_date": "2019-05-06T22:00:00.000Z",
  "supplier": "Supplier 1",
  "status_from": "Available",
  "status_to": "",
},{
  "id": 4,
  "name": "Product 4",
  "status_date": "2019-05-06T22:00:00.000Z",
  "supplier": "Supplier 2",
  "status_from": "Not Available",
  "status_to": "Buy",
},]

const filteredData = data.filter(({
  category
}) => category === "22" || category === "234");

console.log(JSON.stringify(filteredData))

/*
[{
     status_to: "Buy",
     supplier: 3
}, {
    rating: "",
    supplier: 1
}]
 */