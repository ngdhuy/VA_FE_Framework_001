class PhanSo {
    constructor() {
        this.tu = 0
        this.mau = 1
    }

    get Tu() { return this.tu }
    get Mau() { return this.mau }

    set Tu(value) { this.tu = value }
    set Mau(value) {
        if(value != 0)
            this.mau = value
    }
}

let pt = new PhanSo()
console.log(pt)

pt.Tu = 10
pt.Mau = 0

console.log(pt)