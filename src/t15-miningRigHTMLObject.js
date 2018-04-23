const results = {
  "generalInfo": [{
    "post_id": 87,
    "title": "Test Title",
    "permalink": "http://localhost/test-title-4/",
    "category": [],
    "totalPrice": 331.99,
    "hardware": [{
        "partCategory": "x",
        "partTitle": "Test Title",
        "amzImg": "https://images-na.ssl-images.com/images/I/51wsdfgDLUEJwCL.jpg"
      },
      {
        "partCategory": "x",
        "partTitle": "Test Title",
        "amzImg": "https://images-na.ssl-images.com/images/I/51wsdfgDLUEJwCL.jpg"
      },
      {
        "partCategory": "x",
        "partTitle": "Test Title",
        "amzImg": "https://images-na.ssl-images.com/images/I/51wsdfgDLUEJwCL.jpg"
      },
      {
        "partCategory": "x",
        "partTitle": "Test Title",
        "amzImg": "https://images-na.ssl-images.com/images/I/51wsdfgDLUEJwCL.jpg"
      }
    ]
  }, {
    "post_id": 87,
    "title": "Test Title",
    "permalink": "http://localhost/test-title-4/",
    "category": [],
    "totalPrice": 331.99,
    "hardware": [{
        "partCategory": "x",
        "partTitle": "Test Title",
        "amzImg": "https://images-na.ssl-images.com/images/I/51wsdfgDLUEJwCL.jpg"
      },
      {
        "partCategory": "x",
        "partTitle": "Test Title",
        "amzImg": "https://images-na.ssl-images.com/images/I/51wsdfgDLUEJwCL.jpg"
      }
    ]
  }]
}

let dataSet = results.generalInfo.map((item, i) => {
  // build the array manually
  var data = [i + 1];

  item.hardware.forEach((hardware) =>
    data.push(`<img src="${hardware.amzImg}" alt="${hardware.partTitle}">`)
  );

  data.push(`<a href="${item.permalink}">${item.title}</a>`);
  data.push(`$${item.totalPrice.toFixed(2)}`);
  return data;
})

console.log(dataSet)