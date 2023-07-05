let obj = null ;
let s1 = null ;

(function() {
    let s2 = Symbol() ;
    s1 = s2 ;
    obj = { [s2] : "mySymbol" } ;
    console.log("obj[s2] ", obj[s2], "obj [s1]", obj [s1] ) ;
    console.log("obj [s2] == obj [s1]", obj [s2] == obj [s1] ) ;
}) () ;

console.log("obj[s1]", obj[s1]) ;

// obj[s2]  mySymbol obj [s1] mySymbol
// obj [s2] == obj [s1] true
// obj[s1] mySymbol