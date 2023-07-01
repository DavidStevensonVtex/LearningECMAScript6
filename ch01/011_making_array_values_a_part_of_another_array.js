// Other usages of the spread operator

let array1 = [ 2, 3, 4 ];
let array2 = [1, ...array1, 5, 6, 7 ];

console.log("array1 = ", array1 );
console.log("array2 = ", array2 );

// array1 =  [ 2, 3, 4 ]
// array2 =  [
//   1, 2, 3, 4,
//   5, 6, 7
// ]