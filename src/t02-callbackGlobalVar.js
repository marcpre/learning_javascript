var glob = 0
const a = 2
const b = 2

function add(a, b, c, callback) {
    if (a == undefined) {
        a = 0
    } else if (b == undefined) {
        b = 0
    } else if (c == undefined) {
        c = 0
    }
    console.log(a + " " + b + " " + c)
    let res = a + b + c
    callback(res)
    glob = res
}

function printRes(x) {
    add(a, b, x, function (res) {
        res = res + x
        console.log("Print res: " + res)
    })
}

// expected result: 8
printRes(2)

// expected result: 10
printRes(3)