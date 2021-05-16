// define original function
function Sum(a, b) { return a + b }
console.log(Sum(1, 2))

// define anonymous function ~ function pointer in c/c++
let Min = function(a, b){ return a - b }
console.log(Min(3, 4))

// define arrow function
var Mul = (a, b) => { return a * b }
console.log(Mul(5, 6))

var Square = a => a * a;
console.log(Square(2))