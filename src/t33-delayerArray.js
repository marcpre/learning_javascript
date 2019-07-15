    // let productRatingArr = await scrapper.scrapMarketbeatIssuerSinglePage(issuerLinkArr) // DONE
    let prodArr = [[{"rating_date":"7/9/2019","category":"Category 1","action":"Initiates","product_name":"Product 1","product_link":"/product1","rating":"Buy","price_target":"","impact_on_price":"Medium"},{"rating_date":"7/1/2019","category":"Category 1","action":"Initiates","product_name":"Product 1","product_link":"/product1","price_target":"$6.00","impact_on_price":"N/A"}],[{"rating_date":"7/9/2019","category":"Category 2","action":"Initiates","product_name":"Product 2","product_link":"/product2","price_target":"","impact_on_price":"Medium"},{"rating_date":"8/20/2014","category":"Category 3","action":"Upgrades","product_name":"Product 3","product_link":"/product3","price_target":"$118.00","impact_on_price":"N/A"}],[{"rating_date":"5/13/2019","category":"Category 3","action":"Set Price Target","product_name":"Product 3","product_link":"/product3","price_target":"$75.00","impact_on_price":"N/A"},{"rating_date":"","category":"","action":"","product_name":"","product_link":null,"price_target":"","impact_on_price":""}]]

// flatten array
// https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays
const merged = [].concat.apply([], prodArr);

console.log(merged);