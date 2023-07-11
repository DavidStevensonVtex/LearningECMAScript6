let obj = {
    __proto__: {
        name: "Eden"
    }, 
    age: 12
};

console.log("has name?", Reflect.has(obj, "name"));
console.log("has age?", Reflect.has(obj, "age"));

// has name? true
// has age? true