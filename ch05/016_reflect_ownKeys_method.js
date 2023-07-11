let obj = {
    a: 1,
    b: 2,
    __proto__: {
        c: 3
    }
};

let keys = Reflect.ownKeys(obj);
console.log("keys", keys);
// keys [ 'a', 'b' ]
// Ignores inherited properties.