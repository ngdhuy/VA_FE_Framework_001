// Dummy data

var list_product = [
    {
        id : 1, 
        name : "product 1", 
        price : 1000
    },
    {
        id : 2, 
        name : "product 2", 
        price : 1500
    },
    {
        id : 3, 
        name : "product 3", 
        price : 2000
    },
    {
        id : 4, 
        name : "product 4", 
        price : 2500
    },
    {
        id : 5, 
        name : "product 5", 
        price : 3000
    }
];

let tbody = document.querySelector("tbody")
let curID = 0
let isAddNew = true

const loadData = () => {
    tbody.innerHTML = ""
    list_product.forEach(element => {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);

        let th = document.createElement("th")
        th.scope = "row"
        tr.appendChild(th)
        
        let thText = document.createTextNode(element.id)
        th.appendChild(thText)
        
        let tdName = document.createElement("td")
        tr.appendChild(tdName)

        let tdNameText = document.createTextNode(element.name)
        tdName.appendChild(tdNameText)

        let tdPrice = document.createElement("td")
        tr.appendChild(tdPrice)

        let tdPriceText = document.createTextNode(element.price)
        tdPrice.appendChild(tdPriceText)

        let tdAction = document.createElement("td")
        tr.appendChild(tdAction)

        let btnDelete = document.createElement("button")
        btnDelete.className = "btn btn-danger btn-sm"
        btnDelete.type = "button"    
        btnDelete.value = element.id
        tdAction.appendChild(btnDelete)

        let btnDeleteText = document.createTextNode("Delete")
        btnDelete.appendChild(btnDeleteText)

        btnDelete.addEventListener("click", () => {
            let index = list_product.findIndex(element => element.id == btnDelete.value)
            list_product.splice(index, 1)
            loadData()
        })

        let btnEdit = document.createElement("button")
        btnEdit.className = "btn btn-primary btn-sm mx-2"
        btnEdit.type = "button"
        btnEdit.value = element.id
        tdAction.appendChild(btnEdit)

        let btnEditText = document.createTextNode("Edit")
        btnEdit.appendChild(btnEditText)

        btnEdit.addEventListener("click", () => {
            let obj = list_product.find(element => element.id == btnEdit.value)

            document.querySelector("#id").value = obj.id
            document.querySelector("#name").value = obj.name
            document.querySelector("#price").value = obj.price

            let modal = new bootstrap.Modal(document.querySelector("#productModal"))
            modal.show()

            isAddNew = false
        })
    })

    curID = parseInt(list_product[list_product.length - 1].id) + 1
    document.querySelector("#id").value = curID
}

const btnSave_click = () => {
    let id = document.querySelector("#id").value
    let name = document.querySelector("#name").value
    let price = document.querySelector("#price").value

    if(isAddNew == true)
    {
        obj = {
            id : id, 
            name : name, 
            price : price
        }

        list_product.push(obj)
    } else {
        let index = list_product.findIndex(element => element.id == id)
        list_product[index].name = name
        list_product[index].price = price
    }
    resetModal()

    loadData()
    let modal = bootstrap.Modal.getInstance(document.querySelector("#productModal"), false)
    modal.hide()
}

const resetModal = () => {
    document.querySelector("#id").value = ""
    document.querySelector("#name").value = ""
    document.querySelector("#price").value = ""
}

(() => {
    loadData()
    document.querySelector("#btnSave").addEventListener("click", btnSave_click)
})()