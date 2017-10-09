/**
 * A callback function is a function which is:
    -passed as an argument to another function
    -is invoked after some kind of event.
 * 
 */

function multiply(x, y, callback) {
    let res = x * y
    callback(res)
}

function hardOperation(a, b) {
    multiply(a, b, function (res) {
        res = a + b + res
        console.log("The result is " + res)
    })
}

hardOperation(2, 3)