var s = Symbol() ;
var s1 = global.Symbol("My Symbol");
var s2 = global.Symbol("My Symbol");

console.log("s1 === s2", s1 === s2, "s1 == s2", s1 == s2) ;

console.log("s", s, "s1", s1, "s2", s2);

// s1 === s2 false s1 == s2 false
// s Symbol() s1 Symbol(My Symbol) s2 Symbol(My Symbol)