console.log("Number.EPSILON = ", Number.EPISLON);

console.log("0.1 + 0.2 == 0.3", 0.1 + 0.2 == 0.3);
console.log("0.9 -0.8 == 0.1", 0.9 -0.8 == 0.1 );
console.log("0.1 + 0.2 = ", 0.1 + 0.2);
console.log("0.9 - 0.8 = ", 0.9 - 0.8);

function epsilonEqual(a, b)
{
    return Math.abs(a - b) < Number.EPSILON ;
}

console.log("epsilonEqual(0.1 + 0.2, 0.3) = ", epsilonEqual(0.1 + 0.2, 0.3));
console.log("epsilonEqual(0.9 - 0.8, 0.1) = ", epsilonEqual(0.9 - 0.8, 0.1));

// Number.EPSILON =  undefined
// 0.1 + 0.2 == 0.3 false
// 0.9 -0.8 == 0.1 false
// 0.1 + 0.2 =  0.30000000000000004
// 0.9 - 0.8 =  0.09999999999999998
// epsilonEqual(0.1 + 0.2, 0.3) =  true
// epsilonEqual(0.9 - 0.8, 0.1) =  true

// http://floating-point-gui.de/
