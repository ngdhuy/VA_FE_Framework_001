// Function in function

var func_parents = (message) => {
    var func_child = (m) => {
        console.log(`Function child with ${m} is called`)
    }

    func_child(message)
    console.table(message)
    func_child("Hello")
}

func_parents("number = 10")