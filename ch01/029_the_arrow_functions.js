// ECMAScript 6 (2015) allows the creation of anonymous functions using the => operator, 
// and are called arrow functions.

let circleArea = (pi, r) => {
    let area = pi * r * r ;
    return area ;
}

let result = circleArea(3.14, 3) ;

console.log(`Area of circle with radius of: 3: ${result.toFixed(2)}`);
// Area of circle with radius of: 3: 28.26