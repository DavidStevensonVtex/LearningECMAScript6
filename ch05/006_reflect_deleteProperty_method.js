var obj = { 
    name: "Eden"
} ;

console.log("obj.name: ", obj.name);

Reflect.deleteProperty(obj, "name");

console.log("obj.name: ", obj.name);

// obj.name:  Eden
// obj.name:  undefined