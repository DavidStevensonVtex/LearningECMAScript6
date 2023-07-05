// Syntax
// fill(value)
// fill(value, start)
// fill(value, start, end)

// Zero-based index at which to end filling, converted to an integer. fill() fills up to but not including end.

// Negative index counts back from the end of the array — if end < 0, end + array.length is used.
// If end < -array.length, 0 is used.
// If end >= array.length or end is omitted, array.length is used, causing all indices until the end to be filled.
// If end is positioned before or at start after normalization, no index is filled.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill


let arr1 = [ 1, 2, 3, 4 ] ;
let arr2 = [ 1, 2, 3, 4 ] ;
let arr3 = [ 1, 2, 3, 4 ] ;
let arr4 = [ 1, 2, 3, 4 ] ;
let arr5 = [ 1, 2, 3, 4 ] ;


arr1.fill(5) ;
arr2.fill(5, 1, 2 );
arr3.fill(5, 1, 3 ) ;
arr4.fill(5, -3, 2 ) ;
arr5.fill(5, 0, -2 ) ;

console.log("arr1", arr1) ;
console.log("arr2", arr2) ;
console.log("arr3", arr3) ;
console.log("arr4", arr4) ;
console.log("arr5", arr5) ;

// arr1 [ 5, 5, 5, 5 ]
// arr2 [ 1, 5, 3, 4 ]
// arr3 [ 1, 5, 5, 4 ]
// arr4 [ 1, 5, 3, 4 ]
// arr5 [ 5, 5, 3, 4 ]