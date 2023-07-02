// When curly braces are not used, the expression is interpreted as a return value.
// Curly braces may be used for multiple statements, using the return statement to return a value.

let circleArea = (pi, r) => {
    let area = pi * r * r ;
    return area ;
}

let result = circleArea(3.14, 3) ;

console.log(`Area of circle with radius of: 3: ${result.toFixed(2)}`);
// Area of circle with radius of: 3: 28.26