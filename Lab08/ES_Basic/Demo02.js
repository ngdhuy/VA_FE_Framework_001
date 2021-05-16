// ECMA Script version 7.0
const a = 10
var b = "hello"
let c = 2.5

console.log(a, b, c);

if (a == 10) {
    console.log("Insite IF statement")
    console.log(a, b, c)
    // a = 4 => ERROR
    b = 7
    c = 8
    console.log(a, b, c)

    const d = 8
    var e = 9
    let f = 10
    console.log(d, e, f)
}

console.log("Outsite IF statement")
console.log(a, b, c)
console.log(e)