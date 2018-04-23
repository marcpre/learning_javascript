const results = {
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

//transform data set
let dataSet = results.generalInfo.map((item, i) => [
    i + 1,
    `<img src="${item.img}" alt="${item.title}" height="42" width="42">
                 <a href="<?php the_permalink();?>">
                     ${item.title}
                 </a>`,
    item.manufacturer,
    `<div>${item.currency} ${item.price}</div>`,
    item.availability,
    `<button type="button" onclick="">
                    Add
                </button>`,
    `<a class="btn btn-primary" href="${this.addToResults()}" target="_blank" role="button">
                    Buy
                </a>`
])

$('#table_id').DataTable({
    data: dataSet,
    destroy: true,
    columns: [{
            title: "#"
        },
        {
            title: "Title"
        },
        {
            title: "Manufacturer"
        },
        {
            title: "Price"
        },
        {
            title: "Availability"
        },
        {
            title: ""
        },
        {
            title: ""
        }
    ]
})

addToResults() {

    $("ul").append(`<li>${item.title}</li>`);

}