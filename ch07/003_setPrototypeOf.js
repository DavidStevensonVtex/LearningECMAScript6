let object1 = { 
    name: "Eden",
    __proto__: { age : 24 }
}

let object2 = { name: "Eden" } ;
Object.setPrototypeOf(object2, { age: 24 });

let object3 = Object.create( { age: 24 }, { name: { value: "Eden" } }) ;

console.log("object1.name", object1.name, "object1.age", object1.age ) ;
console.log("object2.name", object2.name, "object2.age", object2.age ) ;
console.log("object3.name", object3.name, "object3.age", object3.age ) ;

// object1.name Eden object1.age 24
// object2.name Eden object2.age 24
// object3.name Eden object3.age 24