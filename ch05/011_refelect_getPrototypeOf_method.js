let obj1 = {
    __proto__: {
        name: "Eden"
    }
};

let obj2 = Reflect.getPrototypeOf(obj1) ;

console.log("obj1", obj1);
console.log("obj2", obj2);
console.log("obj2.name", obj2.name) ;

// obj1 {}
// obj2 { name: 'Eden' }
// obj2.name Eden