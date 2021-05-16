console.clear();
console.log("Hello");

n = 10; 
console.log(n);
console.log("%d is the value of n", n);

a = [1, 2, 3, 4, 5];
console.log("a: ", a);

obj = {
    id : 1, 
    name : "iPhone", 
    price : 1200
};
console.log(obj);

console.log("--- INFO ---");
console.info(n);
console.info(a);
console.info(obj);

console.log("--- ERROR ---");
console.error(n);
console.error(a);
console.error(obj);
console.error("Error: ", obj);

console.log("--- WARN ---");
console.warn("Warning: ", n);

console.log("--- DIR ---");
console.dir(obj)

console.log("--- TIME ---");
console.time("Timer");
a.forEach(element => {
    console.log(element);   
});
console.timeEnd("Timer");

console.log("--- TRACE ---");
function f_a() {
    function f_b() {
        function f_c() {
            console.trace("Position of code");
        }
        f_c();
    };
    f_b();
};
f_a();

console.log("--- ASSERT ---");
console.assert(n == 15, "n is not equal 1   5");

console.log("--- TABLE ---");
console.table(obj);
console.table(a);

arrObj = [
    {
        id : 1, 
        name : "product 1", 
        price : 1000
    },
    {
        id : 2, 
        name : "product 2", 
        price : 1000
    },
    {
        id : 3, 
        name : "product 3", 
        price : 1000
    },
    {
        id : 4, 
        name : "product 4", 
        price : 1000
    },
];

console.log(arrObj);
console.table(arrObj);