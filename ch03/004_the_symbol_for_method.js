let obj = {} ;

(function() {
    let s1 = Symbol("name") ;
    obj[s1] = "Eden" ;
}) ();

// obj[s1] cannot be accessed here

console.log("obj[Symbol.for('name')]", obj[Symbol.for('name')]);

for ( let prop of Object.getOwnPropertySymbols(obj)) {
    console.log("key", prop, "value", obj[prop] ) ;
}

(function() {
    let s2 = Symbol.for("age") ;
    obj[s2] = 27 ;
}) () ;

console.log("obj[Symbol.for('age')]", obj[Symbol.for('age')]) ;

for ( let prop of Object.getOwnPropertySymbols(obj)) {
    console.log("key", prop, "value", obj[prop] ) ;
}

// obj[Symbol.for('name')] undefined
// key Symbol(name) value Eden
// obj[Symbol.for('age')] 27
// key Symbol(name) value Eden
// key Symbol(age) value 27
