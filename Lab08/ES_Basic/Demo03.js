console.clear()
arrObj = [
    {
        id : 1, 
        name : "product 1", 
        price : 10000    
    },
    {
        id : 2, 
        name : "product 2", 
        price : 25000    
    },
    {
        id : 3, 
        name : "product 3", 
        price : 30000
    },
    {
        id : 4, 
        name : "product 4", 
        price : 35000
    }
]

console.log(arrObj)

console.log("for ... a[i] ...")
for(let i = 0; i < arrObj.length; i++)
    console.log(arrObj[i])

console.log("a.forEach()...")
arrObj.forEach(element => {
    console.log(element)
})

console.log("--- FILTER ---")
let arrResult = arrObj.filter(element => element.price > 25000)
console.log(arrResult)

console.log("--- CONCAT ---")
aObj = [
    {
        id : 1, 
        name : "hello"
    }
]

arrResult = arrObj.concat(aObj)
console.log(arrResult)

console.log("--- FIND & findIndex ---")
let obj = arrObj.find(element => element.id == 1)
console.log(obj)

let obj_index = arrObj.findIndex(element => element.name == "product 2")
console.log(obj_index)

console.log("--- SPLICE ~ Insert / Remove ---")
console.table(arrObj)
arrObj.splice(1, 0, { id : "100", type : "Hello"})
console.table(arrObj)
arrObj.splice(1, 1)
console.table(arrObj)

console.log("--- INDEX ---")
obj = arrObj.find(element => element.name == "product 3")
let index = arrObj.indexOf(obj)
console.log(index)

console.log("--- ... operator ---")
arrResult = [...arrObj]
console.log(arrResult)
obj = {...arrObj[0]}
console.log(obj)

console.log("--- MAP ---")
console.table(arrObj)
arrResult = arrObj.map(element => ({...element, type : "mobile" }))
console.table(arrResult)