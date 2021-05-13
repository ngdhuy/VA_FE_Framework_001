// Lock OBJECT

const obj = { 
    color: "Red", 
    location: {
        long: 1.1,
        late: 2.5
    }
}
console.table(obj)

obj.color = "Blue"
console.table(obj)

obj.name = "Body"
console.table(obj)

Object.seal(obj)
obj.color = "Green"
obj.width = 100
console.log(obj)

Object.freeze(obj)
obj.color = "Pink"
obj.width = 100
console.table(obj)

let o = JSON.parse(JSON.stringify(obj))
o.color = "Pink"
o.width = 100
console.table(o)
