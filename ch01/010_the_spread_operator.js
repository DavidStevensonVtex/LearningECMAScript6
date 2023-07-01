// The spread operator
// A spread operator splits an iterable object into the individual values.

function myFunction(a, b)
{
    return a + b;
}

let data = [ 1, 4 ] ;
let result = myFunction(...data);
console.log(result);        // 5