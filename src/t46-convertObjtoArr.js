let data = [{
    "id": 10067,
    "date": "2019-09-12T00:00:00.000Z",
    "api_endpoint": "daily",
    "ticker": "AAPL",
    "open": 224.8,
    "high": 226.41,
    "low": 222.86,
    "close": 223.085,
    "volume": 28309862,
    "source": "alphavantage.co",
    "createdAt": "2019-09-13T05:04:21.000Z",
    "updatedAt": "2019-09-13T05:04:21.000Z",
    "CompanyId": null
}, {
    "id": 10067,
    "date": "2019-09-12T00:00:00.000Z",
    "api_endpoint": "daily",
    "ticker": "AAPL",
    "open": 224.8,
    "high": 226.41,
    "low": 222.86,
    "close": 223.085,
    "volume": 28309862,
    "source": "alphavantage.co",
    "createdAt": "2019-09-13T05:04:21.000Z",
    "updatedAt": "2019-09-13T05:04:21.000Z",
    "CompanyId": null
}, {
    "id": 10067,
    "date": "2019-09-12T00:00:00.000Z",
    "api_endpoint": "daily",
    "ticker": "AAPL",
    "open": 224.8,
    "high": 226.41,
    "low": 222.86,
    "close": 223.085,
    "volume": 28309862,
    "source": "alphavantage.co",
    "createdAt": "2019-09-13T05:04:21.000Z",
    "updatedAt": "2019-09-13T05:04:21.000Z",
    "CompanyId": null
}]


let open = []
let close = []
let high = []
let low = []
data.forEach(ele => {
    open.push(ele.open)
    close.push(ele.close)   
    high.push(ele.high)   
    low.push(ele.low)   
});

const res = { open, close, high, low }

console.log(JSON.stringify(res));