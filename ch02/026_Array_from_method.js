let str = "0123" ;
let obj = { number: 1 } ;

let arr = Array.from ( str, function ( value ) {
    return parseInt(value) + this.number ;
}, obj ) ;

console.log(arr) ;      // [ 1, 2, 3, 4 ]