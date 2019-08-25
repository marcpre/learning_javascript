const allPriceTargets = [{
  "ticker": "AAPL",
  "rating_date": "2019-08-22T22:00:00.000Z",
  "issuer": "Wedbush",
  "action": "Reiterated Rating",
  "IssuerId": 175,
  "CompanyId": 435
}, {
  "ticker": "AAPL",
  "rating_date": "2019-08-20T22:00:00.000Z",
  "issuer": "Cowen",
  "action": "Set Price Target",
  "IssuerId": 48,
  "CompanyId": 435
}, {
  "ticker": "AAPL",
  "rating_date": "2019-08-15T22:00:00.000Z",
  "issuer": "UBS Group",
  "action": "Set Price Target",
  "IssuerId": 165,
  "CompanyId": 435
}, {
  "ticker": "AAPL LOLONATOR",
  "rating_date": "2019-08-16T00:00:00.000Z",
  "issuer": "UBS Group",
  "action": "Set Price Target",
  "CompanyId": 435,
  "IssuerId": 165
}]

let dataArray = [{
  "ticker": "AAPL LOLONATOR",
  "rating_date": "2019-08-16T00:00:00.000Z",
  "issuer": "UBS Group",
  "action": "Set Price Target",
  "CompanyId": 435,
  "IssuerId": 165
}]

dataArray = dataArray.filter(cv => !allPriceTargets.find(e => e.rating_date === cv.rating_date && e.issuer === cv.issuer && e.action === cv.action && e.CompanyId === cv.CompanyId && e.IssuerId === cv.IssuerId));

console.log(dataArray);