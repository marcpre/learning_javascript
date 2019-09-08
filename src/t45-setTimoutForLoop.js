let arr = ["Product 1", "Product 2", "Product 3", "Product 4"];
const delay = ms => new Promise(res => setTimeout(res, ms));

async function callApi() {
  for (const item of arr) {
    await delay(2000); // example API call
    console.log(item);
  }
}

callApi()