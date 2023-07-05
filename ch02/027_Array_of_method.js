// The Array.of method is an laternative to the Array constructor for creating arrays.

// When using Array constructor, if we pass only one argument, that too a number, then 
// array constructor constructs an empty array with array length property equal to the 
// passed number instead of creating an array of one element with that number in it. 
// Therefore the Array.of() method was introduced to solve this issue.

let arr1 = new Array(2) ;
let arr2 = Array.of(2) ;
let arr3 = [ 2 ] ;

console.log(arr1[0], arr1.length) ;
console.log(arr2[0], arr2.length) ;
console.log(arr3[0], arr3.length) ;     // Was the Array.of function really necessary?
