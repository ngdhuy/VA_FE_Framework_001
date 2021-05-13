// ECMAScript - define variable

const a = "hello"
var b = 1
let c = 2.5

const e = "Hello world"

console.log(a, b, c)

if (b % 2 != 0)
{
    // a = 2
    b = 5
    c = 8
    console.log(a, b, c)

    const e = "Hello world"
    var f = 8.5
    let g = 999

    console.log(e, f, g)
}

console.log(a, b, c)
console.log(e, f)