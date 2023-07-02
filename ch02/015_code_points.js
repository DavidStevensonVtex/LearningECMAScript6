// In the Unicode character set every character is represented by a 
// base 10 decimal number called a code point.

let \u0061 = "\u0061\u0062\u0063" ;
console.log("a = ", a);
// a =  abc

// Escaping larger code points

// To add \U1f691 to a string we have to escape this way.
console.log("\uD83D\uDE91");
// 🚑

// The codePointAt(index) method

console.log("\n" + "\uD83D\uDE91".codePointAt(1));
console.log("\u{1F691}".codePointAt(1));
console.log("hello".codePointAt(2));
// 56977
// 56977
// 108

// The String.fromCodePoint(number1, ..., number2) method

console.log("\n" + String.fromCodePoint(0x61, 0x62, 0x63));
console.log("\u0061\u0062" == String.fromCodePoint(0x61, 0x62));
// abc
// true
