class Animal {
    constructor() {
        this.id = 1
        this.name = "anonymous"
    }
}

class Cat extends Animal {
    constructor() { 
        super()
        this.name = "Cat" 
    }

    talk() { console.log("Meo Meo ...") }
}

class Dog extends Animal {
    constructor() { 
        super()
        this.name = "DOG" 
    }

    talk() { console.log("Go Go") }
}

let lst_animal = []

for(let i = 0; i < 10; i++) {
    if(Math.round(Math.random() * 10) % 2 == 0) {
        ani = new Cat()
        lst_animal.push(ani)
    } else {
        ani = new Dog()
        lst_animal.push(ani)
    }       
}

lst_animal.forEach(animal => animal.talk())


class Util {
    static getColor() { return Math.round(Math.random() * 100) }
}

console.log("Color is: ", Util.getColor())
