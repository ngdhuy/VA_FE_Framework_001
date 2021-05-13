let name = "iphone"
let product = { name: name }
console.log(product)

let arr = []

for(i = 0; i < 10; i++) {
    let item = {
        ["id_" + i] : "name_" + i, 
        value: i,
        f(x) { this.value = x.value++ }, 
        get() {
            console.log(this.value)
        }
    }
    arr.push(item)
}

console.log(arr)
var x = { value: 1 }
arr.forEach(item => item.f(x))
arr.map(item => item.get())