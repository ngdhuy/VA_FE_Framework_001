// ECMAScript - function

// Method 01: original function
function randNumber() { return Math.random() }
console.log(randNumber())

// Method 02: anonymous function
var f = function () {
    console.log('\x1b[31m', "Hello world!!!")
}
f()

// Method 03: arrow function
var func = (arr) => {
    console.table(arr)
}

let arr = [1, 2, 3, 4, 5]
func(arr)