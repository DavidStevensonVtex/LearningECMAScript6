let obj = { 
    name: "Eden"
} ;

console.log(obj.__proto__) ;
console.log(Object.prototype) ;
console.log(obj.__proto__ == Object.prototype) ;

// [Object: null prototype] {}
// [Object: null prototype] {}
// true