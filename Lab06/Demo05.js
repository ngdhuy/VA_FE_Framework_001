// Array in ES6

let arr = []

for(let i = 1; i <= 10; i++)
    arr.push(i)

// for(let i = 0; i < 10; i++)
//     console.log(arr[i])

console.log(...arr)

let arr_1 = arr.map(item => item * 2)
console.log(arr_1)

