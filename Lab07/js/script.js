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

var tbody;
var id_current;
var isAddNew = true;

var loadData = () => {
    tbody.innerHTML = "";
    list_product.forEach(item => {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);

        let th= document.createElement("th");
        th.scope = "row";
        tr.appendChild(th);

        let id = document.createTextNode(item.id);
        th.appendChild(id);

        let tdName = document.createElement("td");
        tr.appendChild(tdName);

        let name = document.createTextNode(item.name);
        tdName.appendChild(name);

        let tdPrice = document.createElement("td");
        tr.appendChild(tdPrice);

        let price = document.createTextNode(item.price);
        tdPrice.appendChild(price);

        let tdAction = document.createElement("td");
        tr.appendChild(tdAction);

        let btnDelete = document.createElement("button");
        btnDelete.type = "button";
        btnDelete.className = "btn btn-danger btn-sm";
        btnDelete.value = item.id;
        tdAction.appendChild(btnDelete);

        let btnDeleteMessage = document.createTextNode("Delete");
        btnDelete.appendChild(btnDeleteMessage);

        btnDelete.addEventListener("click", () => {
            let pos = 0;
            while (pos < list_product.length) {
                if(list_product[pos].id == btnDelete.value)
                    break;
                else
                    pos++;
            }
            list_product.splice(pos, 1);
            loadData();
        });

        let btnEdit = document.createElement("button");
        btnEdit.type = "button";
        btnEdit.className = "btn btn-primary btn-sm m-1";
        btnEdit.value = item.id;
        tdAction.appendChild(btnEdit);

        btnEditMessage = document.createTextNode("Edit"); 
        btnEdit.appendChild(btnEditMessage);

        btnEdit.addEventListener("click", () => {
            let pos = 0; 
            while (pos < list_product.length) {
                if(list_product[pos].id == btnEdit.value)
                    break;
                else
                    pos++;
            }
            document.querySelector("#id").value = list_product[pos].id; 
            document.querySelector("#name").value = list_product[pos].name; 
            document.querySelector("#price").value = list_product[pos].price;

            let modal = new bootstrap.Modal(document.querySelector("#productModal"));
            modal.show();
            isAddNew = false;
        });
    });

    id_current = parseInt(list_product[list_product.length - 1].id) + 1;
    document.querySelector("#id").value = id_current;
};

var resetModal = () => {
    id_current = parseInt(list_product[list_product.length - 1].id) + 1;
    document.querySelector("#id").value = id_current;
    document.querySelector("#name").value = "";
    document.querySelector("#price").value = "";
};

var btnSave_Click = () => {
    let id = document.querySelector("#id").value;
    let name = document.querySelector("#name").value;
    let price = document.querySelector("#price").value;

    if (isAddNew == true) {
        product = {
            id : id, 
            name : name, 
            price : price
        };

        list_product.push(product);
    }
    else {
        list_product.forEach(item => {
            if(item.id == id) {
                item.name = name; 
                item.price = price;
                return;
            }
        });
    }

    isAddNew = true;

    loadData();
    
    let modal = bootstrap.Modal.getInstance(document.querySelector("#productModal"));
    modal.hide();

    resetModal();
}

(() => {
    tbody = document.querySelector("tbody");

    loadData();

    btnSave = document.querySelector("#btnSave"); 
    btnSave.addEventListener("click", btnSave_Click);
})();